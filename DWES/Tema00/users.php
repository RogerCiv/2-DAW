<?php
session_start();


require('db.php');
$bd = Conectar::conexion();

if(!empty($_POST['login'])){   
    $sql = "SELECT * FROM users WHERE name = '".$_POST['name']."'";
    $result = $bd->query($sql);
    if($datos=$result->fetch_assoc()){
        if($datos['password'] == $_POST['password']){
            $info = 'Usuario Y password correctas';
            $_SESSION['loged'] = true;
            $_SESSION['username'] = $datos['name'];
        }else{
            $info = 'Password incorrecta';
        }  
    }else{
        $info = 'Usuario incorrecto';
    }
}

if(!empty($_GET['register'])){
    $name = $_GET['name'];
    $password = $_GET['password'];
    $passwordHash = password_hash($password,PASSWORD_DEFAULT);

    $sql = "INSERT INTO users  VALUES (NULL,'$name','$passwordHash')";
    $result = $bd->query($sql);


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
    <form method="POST" action="">
        <input type="text" name="name" id="" placeholder="Usuario">
        <input type="password" name="password" placeholder="password">
        <input type="submit" name="login" value="Login">
    </form>
    <br><br><br><br>
    <form method="get">
        <input type="text" name="name" placeholder="Usuario">
        <input type="password" name="password" id="" placeholder="Password">
        <input type="submit" name="register" value="Register">
    </form>
</body>
</html>
<?php

if(!empty($_SESSION['loged'])){
    echo "Hola usuario ".$_SESSION['username'];
}


if(!empty($info)){
   echo "<script>alert('".$info."')</script>";
}
?>