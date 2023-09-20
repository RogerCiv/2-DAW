<?php
require_once('db.php');
error_reporting(E_ALL);
ini_set('display_errors', '1');


$bd = Conectar::conexion();

if(!empty($_POST['title'])){
    $title = $_POST['title'];
    $year = $_POST['year'];
    $poster = $_POST['poster'];
    //$sql = "INSERT INTO peliculas (title, year, poster) VALUES (NULL, ?, ?, ? )";
    $sql = "INSERT into peliculas VALUES  (NULL, '$title', $year, '$poster')";
    //$sql = "INSERT into peliculas VALUES  (NULL, '".$title."',".$year.",'".$poster."')";

    $result=$bd->query($sql);

    header("Location: pelis.php");
    exit(); // Asegura que el script se det
  
}

$q = "SELECT * FROM peliculas";
$result = $bd->query($q);

while ($datos = $result->fetch_assoc()) {
    echo '<div style="display:flex; flex-direction:column; gap:1rem; justify-content:center; align-items:center">';
   // echo $datos['titulo'] . "<br>";
   echo $datos['title'] . "<br>";
    echo $datos['year'] . "<br>";

    //echo '<img src="' . $datos['poster'] . '" alt="Poster de la película" style="width:200px">' . "<br>";
    //echo '</div>';
    $posterFileName = $datos['poster']; // Nombre de la imagen almacenado en la base de datos, por ejemplo, "matrix.webp"
    $posterPath = 'img/' . $posterFileName; // Ruta completa a la imagen

    // Muestra la imagen
    echo '<img src="' . $posterPath . '" alt="Poster de la película" style="width:200px">' . "<br>";
    echo '</div>';
}

echo '<form method="post" action>';
echo '<input type="text" placeholder="Nombre Pelicula" name="title">';
echo '<input type="number" placeholder="Año pelicula" name="year">';
echo '<input type="text" placeholder="Imagen pelicula" name="poster">';
echo '<input type="submit" value="Enviar">';
echo '</form>';
/*
if(isset($_POST['submit'])){
    $titulo = $_POST['titulo'];
    $year = $_POST['year'];
    $poster = $_POST['poster'];
    
    if(!empty($_POST['titulo']) && !empty($_POST['year']) && !empty($_POST['poster'])){
        $sql = "INSERT INTO peliculas (titulo, year, poster) VALUES ( ?, ?, ? )";
        $stmt = $bd->prepare($sql);
        $stmt->bind_param("sis", $titulo, $year, $poster);

        if ($stmt->execute()) {
            echo '<p>Se han agregado correctamente</p>';
        } else {
            echo '<p>Hubo un error al agregar el registro: ' . $stmt->error . '</p>';
        }
        
        $stmt->close();
       
    }
}else {
    $bd->close();
}
*/


?>
