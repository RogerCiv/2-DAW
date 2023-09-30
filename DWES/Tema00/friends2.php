<?php
session_start();
require_once('db.php');
$bd = Conectar::conexion();

function checkSession()
{
    if (!isset($_SESSION['loged'])) {
        $_SESSION['loged'] = false;
        $_SESSION['rol'] = 0;
    }

    if ($_SESSION['rol'] < 1) {
        header('Location: peliculas.php');
    }
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

function verifyUser()
{
    if (!isset($_SESSION['id'])) {
        $id_del_usuario = obtenerIDDeUsuario();
        $_SESSION['id'] = $id_del_usuario;
    }

    if ($_SESSION['rol'] < 1) {
        header('Location: peliculas.php');
    }
}

function isFollowing($idUser, $bd)
{
    $sql = "SELECT * FROM user_friends WHERE user_id =" . $_SESSION['id'] . " AND friend_id = " . $idUser;
    $result = $bd->query($sql);

    return $result->num_rows;
}

function followUser($bd)
{
    if (!empty($_GET['follow'])) {
        $sql = "INSERT INTO user_friends (user_id, friend_id) VALUES (" . $_SESSION['id'] . ", " . $_GET['follow'] . ")";
        $bd->query($sql);
    }
}

function unfollowUser($bd)
{
    if (!empty($_GET['unfollow'])) {
        $unfollowUserId = $_GET['unfollow'];
        $sql = "DELETE FROM user_friends WHERE user_id = " . $_SESSION['id'] . " AND friend_id = " . $unfollowUserId;
        $bd->query($sql);
    }
}

function getUsers($bd)
{
    $q = "SELECT * FROM users WHERE id <> " . $_SESSION['id'];
    $result = $bd->query($q);
    $users = array();

    while ($datos = $result->fetch_assoc()) {
        $users[] = $datos;
    }

    return $users;
}
function getFollowingNames($bd, $following)
{
    $names = array();
    foreach ($following as $followed_user_id) {
        $sql = "SELECT name FROM users WHERE id =" . $followed_user_id;
        $result = $bd->query($sql);
        $user = $result->fetch_assoc();
        $names[] = $user['name'];
    }
    return $names;
}

function getFollowerNames($bd, $followers)
{
    $names = array();
    foreach ($followers as $follower_user_id) {
        $sql = "SELECT name FROM users WHERE id =" . $follower_user_id;
        $result = $bd->query($sql);
        $user = $result->fetch_assoc();
        $names[] = $user['name'];
    }
    return $names;
}

checkSession();
verifyUser();
followUser($bd);
unfollowUser($bd);
$users = getUsers($bd);
$users = getUsers($bd);

$followingNames = getFollowingNames($bd, $following);
$followerNames = getFollowerNames($bd, $followers);

echo "Estás siguiendo a los siguientes usuarios:<br>";
foreach ($followingNames as $name) {
    echo $name . "<br>";
}

echo "Los siguientes usuarios te están siguiendo:<br>";
foreach ($followerNames as $name) {
    echo $name . "<br>";
}


?>
<!DOCTYPE html>
<html lang="en">

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
            echo "Estás siguiendo a los siguientes usuarios:<br>";
            foreach ($followingNames as $name) {
                echo $name . "<br>";
            }

            echo "Los siguientes usuarios te están siguiendo:<br>";
            foreach ($followerNames as $name) {
                echo $name . "<br>";
            }
            ?>
        </section>
    </main>
</body>

</html>
