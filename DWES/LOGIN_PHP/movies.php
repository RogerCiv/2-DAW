<?php
require('db.php');

$bd = Conectar::conexion();

// Lógica para agregar películas a la base de datos
if (isset($_POST['sendFilm'])) {
    // Tu código para agregar la película a la base de datos

    $title = $_POST['title'];
    $year = $_POST['year'];
    $poster = $_POST['img'];

    $sql = "INSERT into peliculas VALUES  (NULL, '$title', $year, '$poster')";
    $result= $bd->query($sql);

    header('Location: index.php');
}

// Lógica para obtener películas desde la base de datos
$movies = array(); // Inicializa un arreglo para almacenar las películas

$sql = "SELECT * FROM peliculas";

$result=$bd->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Agregar la película al arreglo $movies
        $movies[] = $row;
    }
}



if (isset($_POST['borrar'])) {
    // Obtener el ID de la película a eliminar
    $movie_id = $_POST['borrar'];

    // Consulta SQL para eliminar la película
    //$sql = "DELETE FROM peliculas WHERE id = $movie_id";
    $sql = "";
    $result = $bd->query($sql);

    // Redirigir de nuevo a index.php después de la eliminación
    header('Location: index.php');
    exit();
}

?>