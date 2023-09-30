<?php
session_start();
require_once('db.php');
$bd = Conectar::conexion();


if(!isset($_SESSION['loged'])){
    $_SESSION['loged'] = false;
    $_SESSION['rol'] = 0;
}

if($_SESSION['rol']<2){
    header('Location: peliculas.php');
}

if(!empty($_POST['banear'])){
    $name = $_POST['banear'];
    $sql = "UPDATE users SET is_deleted = 1 WHERE name = '$name'";
    $bd->query($sql);
}

if(!empty($_POST['desbanear'])){
    $name = $_POST['desbanear'];
    $sql = "UPDATE users SET is_deleted = 0 WHERE name = '$name'";
    $bd->query($sql);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin web page</title>
</head>
<body>
    <?php
    $sql = "SELECT * FROM users ";
    $result = $bd->query($sql);


    if (!$result) {
        die("Error en la consulta SQL: " . $bd->error);
    }
    
    while ($datos = $result->fetch_assoc()) {   
       // echo $datos['name']; 
        //echo $datos['rol'];

        echo '<ul>';
        echo '<li>'. $datos['name'].'<form method="POST">';
        if($datos['rol'] != 2){

            // echo '<input type="hidden" name="banear" value="'.$datos['name'].'">';
             //echo '<input type="submit" value="Banear">';
             if ($datos['is_deleted'] == 0) {
                 echo '<input type="hidden" name="banear" value="'.$datos['name'].'">';
                 echo '<input type="submit" value="Banear">';
             } else {
                 echo '<input type="hidden" name="desbanear" value="'.$datos['name'].'">';
                 echo '<input type="submit" value="Desbanear">';
             }
        }
        echo '</form></li>';
        echo '</ul>';
    }
    ?>
</body>
</html>

