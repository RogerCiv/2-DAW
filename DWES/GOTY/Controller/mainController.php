<?php
require_once("Model/Game.php");
require_once("Model/GameRepository.php");

require_once("Model/Categoria.php");
require_once("Model/CategoriaRepository.php");
//session_start();

if (!empty($_REQUEST['c'])) {
    if ($_REQUEST['c'] == "vote" && !empty($_POST['Vote'])) {
        require_once("Controller/voteController.php");
    }
}

$games = GameRepository::getAllGames();
include("View/mainView.phtml");
?>
