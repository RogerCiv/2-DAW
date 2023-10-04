<?php

//cargamos el modelo
require_once("models/PeliModel.php");
require_once("models/PeliRepository.php");
require_once("models/UserModel.php");
require_once("models/UserRepository.php");

session_start();


if(!isset($_SESSION['user'])){
    $datos['id']=0;
    $datos['name']="";
    $datos['rol']=0;
    $_SESSION['user'] = new User($datos);
}
if(isset($_GET['login'])) {
    require_once('controllers/LoginController.php');
    die();
}

if(isset($_GET['like'])){
    //cargar instacia de pelicula
    $movie=PeliRepository::getMovieById($_GET['id']);
    //actualizar likes de pelicula
    $movie->addLike($_GET['like']);
}



if(isset($_GET['year']))
$movies=PeliRepository::getMoviesByYear($_GET['year']);
else if(isset($_POST['busca'])){
//usar el repositorio para cargar los datos
$movies=PeliRepository::getMovieByTitle($_POST['busca']);
}else 
$movies=PeliRepository::getMovieOrderByYear();


// cargar la vista
require_once("views/ListView.phtml");
?>