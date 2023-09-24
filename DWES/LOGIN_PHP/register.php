<?php
//session_start();
require('db.php');
$bd = Conectar::conexion();

$message = '';

if (!empty($_POST['register'])) {
    if($_POST['password'] == $_POST['passwordRepeat']){
        $user = $_POST['name'];
        $password = $_POST['password'];

        $sql = "INSERT INTO users VALUE (NULL,'$user','$password')";
        $result = $bd->query($sql);
         header('Location: login.php');


    }else {
        $message = 'Error: La contraseña no coincide';
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/register.css">
    <title>Registro</title>
</head>

<body>
    <div class="container">
        <form method="POST" action="">
            <input type="text" name="name" placeholder="Usuario">
            <input type="password" name="password" placeholder="Contraseña">
            <input type="password" name="passwordRepeat" id="" placeholder="Repetir contraseña">
            <input type="submit" name="register" value="Registrar">
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