<?php
//gestiona variables de entrada

require_once("Model/Publicacion.php");
require_once("Model/PublicacionRepository.php");

require_once("Model/User.php");
require_once("Model/UserRepository.php");

require_once("Model/Comment.php");
require_once("Model/CommentRepository.php");





session_start();

if(!empty($_GET['c'])){
    if($_GET['c'] == "user"){
        require_once("Controller/userController.php");
    }
    if($_GET['c'] == "pub"){
        require_once("Controller/pubController.php");
    }
    if($_GET['c'] == "comment"){
        require_once("Controller/commentController.php");
    }
    if($_GET['c'] == "admin"){
        require_once("Controller/adminController.php");
    }
    if($_GET['c'] == "editPub") {
       
        require_once("Controller/adminController.php");
    }
}


//usa el modelo y aplica cambios a la bd

$pubs = PublicacionRepository::getPublicaciones();


//carga la vista correcta
include("View/adminView.phtml");
include("View/mainView.phtml");
include("View/editPubView.phtml");
//include("View/adminView.phtml");
?>