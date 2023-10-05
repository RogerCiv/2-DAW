<?php

//gestiona variables de entrada

require_once("Model/Publicacion.php");
require_once("Model/PublicacionRepository.php");

require_once("Model/User.php");
require_once("Model/UserRepository.php");

session_start();
if (!empty($_GET['newpub'])) {
    include("View/newPubView.phtml");
    die;
}

if (!empty($_POST['enviarPub'])) {
    PublicacionRepository::publicar();
}

//usa el modelo y aplica cambios a la bd
$pubs = PublicacionRepository::getPublicaciones();

$respuesta = "";
if (!empty($_POST['login'])) {
    $_SESSION['user'] = UserRepository::validar($_POST['usuario'], $_POST['password']);
}

//carga la vista correcta
include("View/mainView.phtml");
