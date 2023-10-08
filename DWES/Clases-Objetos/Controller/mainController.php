<?php
//gestiona variables de entrada

require_once("Model/Publicacion.php");
require_once("Model/PublicacionRepository.php");

require_once("Model/User.php");
require_once("Model/UsersRepository.php");

require_once("Model/Comment.php");
require_once("Model/CommentRepository.php");

session_start();
if (!empty($_GET['newPub'])) {
    include("View/newPubView.phtml");
    die;
}

if (!empty($_POST['newPub'])) {
   PublicacionRepository::newPub($_POST,$_FILES);
}

//usa el modelo y aplica cambios a la bd
$pubs = PublicacionRepository::getPublicaciones();

if(!empty($_POST['sendComment'])) {
    $_SESSION['pub'] = $_POST['id'];
  CommentRepository::newComment($_POST);
}

//$respuesta = "";

if (!empty($_POST['login'])) {
    $_SESSION['user'] = UserRepository::validar($_POST['usuario'], $_POST['password']);
}

if(!empty($_POST['logout'])) {
    $_SESSION['user'] = UserRepository::logout();
}

//carga la vista correcta
include("View/mainView.phtml");

?>