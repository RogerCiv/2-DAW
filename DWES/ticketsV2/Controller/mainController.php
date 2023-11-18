<?php
ob_start();

// Resto del código


require_once("Model/Users.php");
require_once("Model/UsersRepository.php");

require_once("Model/Tickets.php");
require_once("Model/TicketsRepository.php");


require_once("Model/Responses.php");
require_once("Model/ResponseRepository.php");

require_once("Model/Ratings.php");
require_once("Model/RatingsRepository.php");

session_start();
if (!empty($_GET['c'])) {
    if ($_GET['c'] == "user") {
        require_once("Controller/userController.php");
    }
    if($_GET['c'] == "ticket"){
        require_once("Controller/ticketController.php");
    }
    if($_GET['c'] == "response"){
        require_once("Controller/responseController.php");
    }
    if($_GET['c'] == "admin"){
        require_once("Controller/adminController.php");
    }
    if($_GET['c'] == "rating"){
        require_once("Controller/ratingController.php");
    }
}





include("View/mainView.phtml");
ob_end_flush();
?>