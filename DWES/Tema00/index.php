<?php
session_start();
require_once('db.php');
$bd = Conectar::conexion();
$headerContent = ''; // Inicializa el contenido del encabezado
$mainContent = '';  // Inicializa el contenido principal

if (!empty($_POST['login'])) {
    $sql = "SELECT * FROM users WHERE name = '" . $_POST['name'] . "'";
    $result = $bd->query($sql);
    if ($datos = $result->fetch_assoc()) {
        if ($datos['password'] == $_POST['password']) {
            $info = 'Usuario Y password correctas';
            $_SESSION['loged'] = true;
            $_SESSION['username'] = $datos['name'];
        } else {
            $info = 'Password incorrecta';
        }
    } else {
        $info = 'Usuario incorrecto';
    }
}

if (!empty($_GET['logout'])) {
    $_SESSION['loged'] = false;
    header('location: peliculas.php');
}

if (!empty($_POST['title'])) {
    $title = $_POST['title'];
    $year = $_POST['year'];
    $poster = $_POST['poster'];
    //$sql = "INSERT INTO peliculas (title, year, poster) VALUES (NULL, ?, ?, ? )";
    $sql = "INSERT into peliculas VALUES  (NULL, '$title', $year, '$poster')";
    //$sql = "INSERT into peliculas VALUES  (NULL, '".$title."',".$year.",'".$poster."')";
    $result = $bd->query($sql);
    header("Location: peliculas.php");
    exit(); // Asegura que el script se detenga
}

if (!empty($_POST['borrar'])) {
    $peliID = $_POST['borrar'];
    $sql = "DELETE  FROM peliculas WHERE id = '$peliID'";
    $result = $bd->query($sql);
}

// Comprueba si el usuario está autenticado y genera el contenido correspondiente
if (!empty($_SESSION['loged'])) {
    $headerContent .= '<p class="user">Hola usuario ' . $_SESSION['username'] . '</p>';

    if ($_SESSION['loged']) {
        $q = "SELECT * FROM peliculas";
        $result = $bd->query($q);

        // Genera el formulario para agregar películas
        $mainContent .= '<form class="form" method="post" action>';
        $mainContent .= '<input type="text" placeholder="Nombre Pelicula" name="title">';
        $mainContent .= '<input type="number" placeholder="Año pelicula" name="year">';
        $mainContent .= '<input type="text" placeholder="Imagen pelicula" name="poster">';
        $mainContent .= '<input type="submit" value="Añadir">';
        $mainContent .= '</form>';

        $mainContent .= '<div class="container">';
        while ($datos = $result->fetch_assoc()) {
            $posterFileName = $datos['poster']; // Nombre de la imagen almacenado en la base de datos, por ejemplo, "matrix.webp"
            $posterPath = 'img/' . $posterFileName; // Ruta completa a la imagen

            // Muestra la imagen
            $mainContent .= '<div class="pelicula">';
            $mainContent .= '<div class="film__img">';
            $mainContent .= '<img src="' . $posterPath . '" alt="Poster de la película">';
            $mainContent .= '</div>';
            $mainContent .= '<div class="film__info">';
            $mainContent .= '<p class="film__name">' . $datos['title'] . '</p>';
            $mainContent .= '<p class="film__year">' . $datos['year'] . '</p>';
            $mainContent .= '</div>';
            if ($_SESSION['loged']) {
                $mainContent .= '<form method="POST">';
                $mainContent .= '<input type="hidden" name="borrar" value="' . $datos['id'] . '">';
                $mainContent .= '<input type="submit" value="borrar">';
                $mainContent .= '</form>';
            }
            $mainContent .= '</div>';
        }
        $mainContent .= '</div>';
    }
}

// Incluye la plantilla
include('template.php');
?>
