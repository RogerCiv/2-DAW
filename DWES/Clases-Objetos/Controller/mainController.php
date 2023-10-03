<?php
//Gestiona variables entranada

// Usa el modelo y aplica cambios a la BD

// Carga la vista correcta

require_once('Model/Publicacion.php');
require_once('Model/PublicacionRepository.php');
require_once('Model/User.php');
require_once('Model/UsersRepository.php');
require_once('Controller/userController.php');
//session_start();

if(!empty($_POST['login'])){
    $user = $_POST['user'];
    $password = $_POST['password'];
/*
    if(UsersRepository::validarCredenciales($user,$password)){
        $_SESSION['username'] = $user;
        $_SESSION['loged'] = true;
        echo 'ok';
        header('Location: index.php');
        exit();
    }else{
        echo 'Credenciales incorrectas';
    }
    */
   $user = UsersRepository::validarCredenciales($_POST['user'],$_POST['password']);
}

//$user = UsersRepository::validarCredenciales($_POST['user'],$_POST['password']);
//$_SESSION['user'] = UsersRepository::validarCredenciales($_POST['user'],$_POST['password']);
$pubs = PublicacionRepository::getPublicaciones();

$users = UsersRepository::getUsers();



include('View/mainView.phtml');

?>