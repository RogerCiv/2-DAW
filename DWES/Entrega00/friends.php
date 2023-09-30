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

function obtenerIDDeUsuario()
{
    if (isset($_SESSION['user_id'])) {
        return $_SESSION['user_id'];
    } else {
        header('Location: peliculas.php');
        exit();
    }
}

// Verifica si el usuario ha iniciado sesión y tiene un ID válido
if (!isset($_SESSION['id'])) {

    $id_del_usuario = obtenerIDDeUsuario(); 

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

function followUser($bd){

    if (!empty($_GET['follow'])) {
        //$sql = "INSERT INTO user_friends VALUES (" . $_SESSION['id'] . ", " . $_GET['follow'] . ")";
        $sql = "INSERT INTO user_friends (user_id, friend_id) VALUES (" . $_SESSION['id'] . ", " . $_GET['follow'] . ")";
    
        $bd->query($sql);
    }
}

function unfollowUser($bd){

    if (!empty($_GET['unfollow'])) {
        $unfollowUserId = $_GET['unfollow'];
        // Realiza la acción para dejar de seguir al usuario aquí
        $sql = "DELETE FROM user_friends WHERE user_id = " . $_SESSION['id'] . " AND friend_id = " . $unfollowUserId;
        $bd->query($sql);
        // Puedes agregar lógica adicional si es necesario, como manejar errores o redireccionar.
    }
}

function users($bd)
{
    $q = "SELECT * FROM users WHERE id <> " . $_SESSION['id'];
    $result = $bd->query($q);
    $users = array();

    while ($datos = $result->fetch_assoc()) {
        $users[] = $datos;
    }
    return $users;
}
followUser($bd);
unfollowUser($bd);
$users = users($bd);
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="friends.css">
    <title>Document</title>
</head>

<body>
    <main>
        <section class="usuarios">
            <div class="follow">
                <?php
                foreach ($users as $user) {
                    if (isFollowing($user['id'], $bd) == 0) {
                        echo '<span>' . $user['name'] . '</span>';
                        echo "<a href='friends.php?follow=" . $user['id'] . "'>Seguir</a><br>";
                    } else {
                        echo '<span>' . $user['name'] . '</span>';
                        echo  "<a href='friends.php?unfollow=" . $user['id'] . "'>Dejar de seguir</a><br>";
                    }
                }
                ?>
            </div>
            <?php
            // Obtén los usuarios que el usuario actual está siguiendo
            $sql = "SELECT * FROM user_friends WHERE user_id =" . $_SESSION['id'];
            $result = $bd->query($sql);
            $following = array();

            while ($row = $result->fetch_assoc()) {
                $following[] = $row['friend_id'];
            }
            echo '<div class"followers">';
            echo "<h2>Estás siguiendo a los siguientes usuarios:</h2>";
            echo '<ul>';
            foreach ($following as $followed_user_id) {
                $sql = "SELECT name FROM users WHERE id =" . $followed_user_id;
                $result = $bd->query($sql);
                $user = $result->fetch_assoc();
                echo '<li>'. $user['name'] . "</li>";
            }
            echo '</ul>';
            echo '</div>';


            // Obtén los usuarios que están siguiendo al usuario actual
            $sql = "SELECT * FROM user_friends WHERE friend_id =" . $_SESSION['id'];
            $result = $bd->query($sql);
            $followers = array();

            while ($row = $result->fetch_assoc()) {
                $followers[] = $row['user_id'];
            }
            echo '<div class"followers">';
            echo "<h2>Los siguientes usuarios te están siguiendo:</h2>";
            echo '<ul>';
            foreach ($followers as $follower_user_id) {
                $sql = "SELECT name FROM users WHERE id =" . $follower_user_id;
                $result = $bd->query($sql);
                $user = $result->fetch_assoc();
                echo '<li>'. $user['name'] . "</li>";
            }
            echo '</ul>';
            echo '</div>';
            ?>
           <a href="index.php"> <button >Volver a Inicio</button></a>
        </section>
    </main>
</body>
</html>