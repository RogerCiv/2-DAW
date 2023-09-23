<?php
require_once('db.php');

if(!empty($_POST['login'])){
    if (empty($_POST['name']) && empty($_POST['password'])) {
        echo '<div class="alert-danger">Los campos están vacíos</div>';
    } else {
        $usuario = $_POST['name'];
        $password = $_POST['password'];

        $bd = Conectar::conexion();

        $sql = "SELECT * FROM users WHERE name = '$usuario' AND password = '$password'";
        $result = $bd->query($sql);
         //var_dump($result);

        if($datos=$result->fetch_assoc()){
            header('location: index.php')
            ;
        }else{
            echo '<div class="alert-danger">Credenciales incorrectas</div>';

        }
    }
    
}

?>