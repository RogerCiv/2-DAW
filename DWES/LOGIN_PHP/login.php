<?php
session_start();
require('db.php');
$bd = Conectar::conexion();

$message = '';

if (!empty($_POST['login'])) {
    $sql = "SELECT * FROM users WHERE name = '" . $_POST['name'] . "'";
    $result = $bd->query($sql);

    if ($datos = $result->fetch_assoc()) {
        if ($datos['password'] == $_POST['password']) {
            $_SESSION['username'] = $datos['name'];
            header('Location: index.php');
            exit();
            //$message = 'Bienvenido ' . $datos['name'];
        }
    }
    if (empty($message)) {
        $message = 'Datos incorrectos';
    }
    // echo $message;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css">
    <title>Login</title>
</head>

<body>
    <div class="container">
        <form method="POST" action="login.php">
            <input type="text" name="name" placeholder="Usuario">
            <input type="password" name="password" placeholder="Contraseña">
            <input type="submit" name="login" value="Login">
        </form>
        <div class="alert__danger">
            <?php
            // echo '<div class="alert__danger">';
            echo '<p>' . $message . '</p>';
            // echo '</div>';
            ?>
        </div>
    </div>


</body>

</html>