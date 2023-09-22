<?php
session_start();
require_once('db.php');
$bd = Conectar::conexion();

if(!empty($_POST['login'])){   
    $sql = "SELECT * FROM users WHERE name = '".$_POST['name']."'";
    $result = $bd->query($sql);
    if($datos=$result->fetch_assoc()){
        if($datos['password'] == $_POST['password']){
            $info = 'Usuario Y password correctas';
            $_SESSION['loged'] = true;
            $_SESSION['username'] = $datos['name'];
        }else{
            $info = 'Password incorrecta';
        }  
    }else{
        $info = 'Usuario incorrecto';
    }
}
if(!empty($_GET['logout'])){
    $_SESSION['loged'] = false;
    header('location: peliculas.php');
}

if(!empty($_POST['title'])){
    $title = $_POST['title'];
    $year = $_POST['year'];
    $poster = $_POST['poster'];
    //$sql = "INSERT INTO peliculas (title, year, poster) VALUES (NULL, ?, ?, ? )";
    $sql = "INSERT into peliculas VALUES  (NULL, '$title', $year, '$poster')";
    //$sql = "INSERT into peliculas VALUES  (NULL, '".$title."',".$year.",'".$poster."')";

    $result=$bd->query($sql);
    header("Location: peliculas.php");
    exit(); // Asegura que el script se det
}

if(!empty($_POST['borrar'])){
    $peliID = $_POST['borrar'];
    $sql = "DELETE  FROM peliculas WHERE id = '$peliID'";
    $result = $bd->query($sql);
}
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
    echo '<p class="user">Hola usuario ' . $_SESSION['username'] . '</p>';
}

if($_SESSION['loged']){

    $q = "SELECT * FROM peliculas";
    $result = $bd->query($q);
    
    echo '<form class="form" method="post" action>';
    echo '<input type="text" placeholder="Nombre Pelicula" name="title">';
    echo '<input type="number" placeholder="Año pelicula" name="year">';
    echo '<input type="text" placeholder="Imagen pelicula" name="poster">';
    echo '<input type="submit" value="Añadir">';
    echo '</form>';
    
    echo '</header>';
    echo '<main>';
    echo '<div class="container">'; 
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
            echo  '<input type="hidden" name="borrar" value="' . $datos['id'] . '">';
            echo  '<input type="submit" value="borrar">';
            echo  '</form>';
        }
        echo  '  </div>';
    }
    echo  '</div>';
    echo '</main>';
}
?>
</body>
</html>
<?php
if(!empty($info)){
    echo "<script>alert('".$info."')</script>";
 }
 ?>