<!DOCTYPE html>
<?php
require_once('db.php');
error_reporting(E_ALL);
ini_set('display_errors', '1');
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./pelicula.css">
    <title>Document</title>
</head>
<body>
<header> 

<?php

$bd = Conectar::conexion();

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
    echo  '  </div>';
}
echo  '</div>';
echo '</main>';

?>


</body>
</html>

