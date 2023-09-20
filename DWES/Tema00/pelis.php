<?php
require_once('db.php');
error_reporting(E_ALL);
ini_set('display_errors', '1');


$bd = Conectar::conexion();

if(!empty($_POST['titulo'])){
    $titulo = $_POST['titulo'];
    $year = $_POST['year'];
    $poster = $_POST['poster'];
    //$sql = "INSERT INTO peliculas (titulo, year, poster) VALUES (NULL, ?, ?, ? )";
    $sql = "INSERT into peliculas VALUES  (NULL, '".$titulo."',".$year.",'".$poster."')";

    $result=$bd->query($sql);
  
}

$q = "SELECT * FROM peliculas";
$result = $bd->query($q);

while ($datos = $result->fetch_assoc()) {
    echo '<div style="display:flex; flex-direction:column; gap:1rem; justify-content:center; align-items:center">';
    echo $datos['titulo'] . "<br>";
    echo $datos['year'] . "<br>";
    echo '<img src="' . $datos['poster'] . '" alt="Poster de la película" style="width:200px">' . "<br>";
    echo '</div>';
}

echo '<form method="post" action>';
echo '<input type="text" placeholder="Nombre Pelicula" name="titulo">';
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
