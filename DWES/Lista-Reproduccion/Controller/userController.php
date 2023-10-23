<?php


if (!empty($_POST['login'])) {
    $_SESSION['user'] = UserRepository::validar($_POST['usuario'], $_POST['password']);
}

if(!empty($_POST['logout'])) {
    $_SESSION['user'] = UserRepository::logout();
}


?>