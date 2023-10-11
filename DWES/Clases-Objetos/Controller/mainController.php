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
}



//usa el modelo y aplica cambios a la bd

$pubs = PublicacionRepository::getPublicaciones();



// adminController.php
/*
if (!empty($_POST['changeRole'])) {
    $userId = $_POST['userId'];
    $newRole = $_POST['newRole'];
    
    // Realizar la actualización del rol en la base de datos
    UserRepository::updateUserRole($userId, $newRole);
    
    // Redirigir o mostrar un mensaje de éxito (según tu preferencia)
    // header("Location: index.php?c=admin");
    // exit;
}
*/

/*
if(!empty($_POST['sendComment'])) {
    $_SESSION['pub'] = $_POST['id'];
  CommentRepository::newComment($_POST);
}
*/
//$respuesta = "";

//carga la vista correcta
include("View/adminView.phtml");
include("View/mainView.phtml");
//include("View/adminView.phtml");

?>