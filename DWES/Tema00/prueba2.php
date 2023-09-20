<?php
require_once('db.php');

$bd = Conectar::conexion();

$q="SELECT * FROM peliculas";
$result=$bd->query($q);

while($datos=$result->fetch_assoc()){
    echo $datos['titulo'];
}

?>