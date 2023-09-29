<?php
session_start();
require_once('db.php');
$bd = Conectar::conexion();

function login($bd){
    if(!empty($_POST['login'])){   
        $sql = "SELECT * FROM users WHERE name = '".$_POST['name']."'";
        $result = $bd->query($sql);
        if($datos=$result->fetch_assoc()){
            if($datos['password'] == $_POST['password']){
                $info = 'Usuario Y password correctas';
                $_SESSION['loged'] = true;
                $_SESSION['username'] = $datos['name'];
                $_SESSION['rol'] = $datos['rol'];
                $_SESSION['user_id'] = $datos['id'];
            }else{
                $info = 'Password incorrecta';
            }  
        }else{
            $info = 'Usuario incorrecto';
        }
    }
}

function logout(){
    if(!empty($_GET['logout'])){
        $_SESSION['loged'] = false;
        header('location: peliculas.php');
    }
}

function addMovie($bd){
    if(!empty($_POST['title'])){
        $title = $_POST['title'];
        $year = $_POST['year'];
        $poster = $_POST['poster'];
        
        $sql = "INSERT into peliculas VALUES  (NULL, '$title', $year, '$poster',1)";

        $result = $bd->query($sql);
        header("Location: peliculas.php");
        exit(); // Asegura que el script se detenga después de redirigir
    }
}

function deleteMovie($bd){
    if(!empty($_POST['borrar'])){
        $peliID = $_POST['id'];
        $sql = "UPDATE peliculas SET state = 0 WHERE id = '$peliID'";
        $result = $bd->query($sql);
    }
}

function likeMovie($bd){
    if(!empty($_POST['like'])){
        if($_SESSION['loged']){
            $idLike = $_POST['id'];
            $idUser = $_SESSION['user_id'];

            $sqlLikes = "SELECT * FROM user_movie WHERE user_id = '$idUser' AND movie_id = '$idLike'";
            $resultLikes = $bd->query($sqlLikes);

            if($resultLikes){
                if ($resultLikes->num_rows > 0) {
                    echo 'Ya existe el like de este usuario a esta película';
                   
                } else {
                    $sql = "INSERT INTO user_movie (user_id, movie_id) VALUES ('$idUser' , '$idLike')";
                    $result = $bd->query($sql);
                }
            } else {
                echo "Error en la consulta SQL: " . $bd->error;
            }
        }
    }
}

function unlikeMovie($bd){
    if(!empty($_POST['unlike'])){
        if($_SESSION['loged']){
            $idLike = $_POST['id'];
            $idUser = $_SESSION['user_id'];

            $sqlUnlikes = "SELECT * FROM user_movie WHERE user_id = '$idUser' AND movie_id = '$idLike'";
            $resultUnlikes = $bd->query($sqlUnlikes);
            if($resultUnlikes){
                if($resultUnlikes->num_rows > 0){
                    $sql = "DELETE FROM user_movie WHERE user_id = '$idUser' AND movie_id = '$idLike'";
                    $result = $bd->query($sql);
                    if($result){
                        echo 'Borrado el like';
                    }
                }
            }
        }
    }
}

// Llama a las funciones pasando $bd como argumento cuando sea necesario
login($bd);
logout();
addMovie($bd);
deleteMovie($bd);
likeMovie($bd);
unlikeMovie($bd);

?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./pelicula.css">
    <title>Peliculas</title>
</head>
<body>
<header> 
<form method="POST" action="">
        <input type="text" name="name" id="" placeholder="Usuario">
        <input type="password" name="password" placeholder="password">
        <input type="submit" name="login" value="Login">
    </form>
<form method="GET">
    <input type="submit" name="logout" value="logout">
</form>
<?php
if (!empty($_SESSION['loged'])) {
    echo '<p class="user">Hola usuario ' . $_SESSION['username'] .' '. $_SESSION['rol']. '</p>';
        if ($_SESSION['rol'] == 2) {
            echo '<a href="admin.php"><button>Admin web page</button></a>';
        }
}
?>

<form class="form" method="post" action>
    <input type="text" placeholder="Nombre Pelicula" name="title">
    <input type="number" placeholder="Año pelicula" name="year">
    <input type="text" placeholder="Imagen pelicula" name="poster">
    <input type="submit" value="Añadir">
</form>
</header>
<main>
<div class="container">
<?php
$q = "SELECT peliculas.*, COUNT(user_movie.movie_id) AS likes_count FROM peliculas LEFT JOIN user_movie ON peliculas.id = user_movie.movie_id WHERE peliculas.state = 1 GROUP BY peliculas.id";
$result = $bd->query($q);

while ($datos = $result->fetch_assoc()) {      
    echo ' <div class="pelicula">';
    $posterFileName = $datos['poster']; // Nombre de la imagen almacenado en la base de datos, por ejemplo, "matrix.webp"
    $posterPath = 'img/' . $posterFileName; // Ruta completa a la imagen

    // Muestra la imagen
    echo '<div class="film__img">';
    echo '<img src="' . $posterPath . '" alt="Poster de la película">';
    echo '</div>';
    echo  '    <div class="film__info">';
    echo  '      <p class="film__name">'.$datos['title'].'</p>';
    echo  '      <p class="film__year">'.$datos['year'].'</p>';
    echo  '   </div>';
    if($_SESSION['loged']){      
        echo  '<form method="POST">';
        echo  '<input type="hidden" name="id" value="' . $datos['id'] . '">';
        if($_SESSION['rol'] > 1){

            echo  '<input type="submit" name="borrar" value="Borrar">';
        }
        // Verifica si el usuario ya ha dado like a esta película
    $idLike = $datos['id'];
    $idUser = $_SESSION['user_id'];
    $sqlLike = "SELECT * FROM user_movie WHERE user_id = '$idUser' AND movie_id = '$idLike'";
    $resultLike = $bd->query($sqlLike);
    if($resultLike->num_rows > 0){
        //echo '<p>'.$datos['likes_count'].'</p>';
        echo  '<input type="submit" name="unlike" value="UnLike">'.$datos['likes_count'] ;
    }else{
        echo  '<input type="submit" name="like" value="Like">'.$datos['likes_count'] ;

    }

        echo  '</form>';
    }
    echo  '  </div>';
}
echo  '</div>';
?>
</main>
</body>
</html>
 <?php
    if(!empty($info)){
    echo "<script>alert('".$info."')</script>";
 }
 ?>
