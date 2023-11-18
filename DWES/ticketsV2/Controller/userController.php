<?php

if (!empty($_POST['login'])) {
    // Validación y configuración de la sesión aquí
    $_SESSION['user'] = UsersRepository::validar($_POST['username'], $_POST['password']);
    header("Location: index.php");
    die;
/*
    if ($_SESSION['user']->getRol() == 0) {
        //include("View/clientView.phtml");
        //header("Location: clientView.php");
        exit;
    }
    */
}

if(!empty($_POST["logout"])) {
    session_destroy();
    header("Location: index.php");
    die;
}


if (!empty($_GET['clientView'])) {
    include("View/clientView.phtml");
    exit;
}

?>