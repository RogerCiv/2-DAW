<?php
/*
require_once('Model/UsersRepository.php');

class userController {
     public function login(){
        if(!empty($_POST['login'])){
            $user = $_POST['user'];
            $password = $_POST['password'];

            if(UsersRepository::validarCredenciales($user,$password)){
                $_SESSION['username'] = $user;
                $_SESSION['loged'] = true;
                echo 'ok';
                header('Location: index.php');
                exit();
            }else{
                echo 'Credenciales incorrectas';
            }
        }
    }
}*/

?>