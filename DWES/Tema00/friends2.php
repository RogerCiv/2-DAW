<?php
session_start();
require_once('db.php');
$bd = Conectar::conexion();


if (!isset($_SESSION['loged'])) {
    $_SESSION['loged'] = false;
    $_SESSION['rol'] = 0;
}

if ($_SESSION['rol'] < 1) {
    header('Location: peliculas.php');
}

function obtenerIDDeUsuario() {
    if (isset($_SESSION['user_id'])) {
        return $_SESSION['user_id'];
    } else {
        header('Location: peliculas.php');
        exit(); // Asegúrate de salir del script después de redirigirlo
    }
}

// Verifica si el usuario ha iniciado sesión y tiene un ID válido
if (!isset($_SESSION['id'])) {
    // Reemplaza esto con tu lógica para obtener el ID del usuario que ha iniciado sesión
    $id_del_usuario = obtenerIDDeUsuario(); // Reemplaza esto con tu propia lógica

    // Establece el ID del usuario en la sesión
    $_SESSION['id'] = $id_del_usuario;
}

// Verifica el rol del usuario
if ($_SESSION['rol'] < 1) {
    header('Location: peliculas.php');
}

function isFollowing($idUser, $bd)
{
    $sql = "SELECT * FROM user_friends WHERE user_id =" . $_SESSION['id'] . " AND friend_id = " . $idUser;
    $result = $bd->query($sql);

    return $result->num_rows;
}

if (!empty($_GET['follow'])) {
    //$sql = "INSERT INTO user_friends VALUES (" . $_SESSION['id'] . ", " . $_GET['follow'] . ")";
    $sql = "INSERT INTO user_friends (user_id, friend_id) VALUES (" . $_SESSION['id'] . ", " . $_GET['follow'] . ")";

    $bd->query($sql);
}
if (!empty($_GET['unfollow'])) {
    $unfollowUserId = $_GET['unfollow'];
    // Realiza la acción para dejar de seguir al usuario aquí
    $sql = "DELETE FROM user_friends WHERE user_id = " . $_SESSION['id'] . " AND friend_id = " . $unfollowUserId;
    $bd->query($sql);
    // Puedes agregar lógica adicional si es necesario, como manejar errores o redireccionar.
}


$q = "SELECT * FROM users WHERE id <> " . $_SESSION['id'];
$result = $bd->query($q);
$users = array();

while ($datos = $result->fetch_assoc()) {
    $users[] = $datos;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
foreach ($users as $user) {
    if (isFollowing($user['id'], $bd) == 0) {
        echo $user['name'] . "<a href='friends2.php?follow=" . $user['id'] . "'>Seguir</a><br>";
    } else {
        echo $user['name'] . "<a href='friends2.php?unfollow=" . $user['id'] . "'>Dejar de seguir</a><br>";
    }
}

?>
    
</body>
</html>

HACER UNA LISTA DE A QUIEN ESTAS SIGUIENDO  y OTRA DE LOS SEGUIDORES QUE TIENES.