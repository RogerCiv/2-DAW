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
    if($_GET['c'] == "search"){
        require_once("Controller/searchController.php");
    }
    if($_GET['c'] == "main"){
        require_once("Controller/pubController.php");
    }
}
/*
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$perPage = 4;
$offset = ($page - 1) * $perPage;
$pubs = PublicacionRepository::getPublicacionesPaged($offset, $perPage);
*/
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$perPage = 4; // Establece la cantidad de publicaciones por página
$offset = ($page - 1) * $perPage; // Calcula el desplazamiento

// Luego, en tu consulta SQL, usa $offset y $perPage para limitar los resultados.
$pubs = PublicacionRepository::getPublicacionesPaged($offset, $perPage);

$totalPubs = PublicacionRepository::getTotalPublications($search); 


//usa el modelo y aplica cambios a la bd
//$pubs = PublicacionRepository::getPublicaciones();



//carga la vista correcta
//include("View/adminView.phtml");
include("View/mainView.phtml");
//include("View/editPubView.phtml");
//include("View/adminView.phtml");
?>