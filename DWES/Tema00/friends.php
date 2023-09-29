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

if (!empty($_POST['addFriend'])) {
    $idUser = $_POST['addFriend'];
    $idUserSesion = $_SESSION['user_id'];
    //var_dump($_SESSION['rol']);

    if ($idUserSesion != $idUser) {
        $sqlRol =  "SELECT rol FROM users WHERE id = $idUser";
        $result = $bd->query($sqlRol);

        if ($result) {
            $datos = $result->fetch_assoc();
            if ($datos['rol'] < 2) {
                $sql = "INSERT INTO user_friends (user_id, friend_id,follow) VALUES ($idUserSesion, $idUser,0)";
                $bd->query($sql);
            }
        }
    }
}
if (!empty($_POST['delFriend'])) {
    $idUser = $_POST['delFriend'];
    $idUserSesion = $_SESSION['user_id'];

    if ($idUserSesion != $idUser) {
        $sqlDelete = "UPDATE user_friends SET follow = 1 WHERE user_id = $idUserSesion AND friend_id = $idUser"; // Agrega la condición para identificar el registro específico
        $bd->query($sqlDelete);
    }
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friends</title>
</head>

<body>

    <?php
    $sql = "SELECT * FROM users ";
    $result = $bd->query($sql);

    if (!$result) {
        die("Error en la consulta SQL: " . $bd->error);
    }

    while ($datos = $result->fetch_assoc()) {
        echo '<ul>';
        if ($datos['is_deleted'] == 0) { // Verifica si el usuario no está baneado
           // $_SESSION['baneado'] = $datos['name'];
            echo '<li>' . $datos['name'] . '<form method="POST">';
            echo '<input type="hidden" name="addFriend" value="' . $datos['id'] . '">';
            $idUser = $datos['id'];
            $idUserSesion = $_SESSION['user_id'];
            $sqlFriend = "SELECT * FROM user_friends WHERE user_id = $idUserSesion AND friend_id = $idUser AND follow = 0";
            $resultFriend = $bd->query($sqlFriend);

            if ($resultFriend->num_rows < 1) {
                echo '<input type="submit" value="Add Friend">';
            } else {
                echo '<input type="hidden" name="delFriend" value="' . $datos['id'] . '">';
                echo '<input type="submit" value="Delete Friend"';
            }
            echo '</form></li>';
        }
        echo '</ul>';
    }
    echo '</form></li>';
    echo '</ul>';

    ?>

</body>

</html>