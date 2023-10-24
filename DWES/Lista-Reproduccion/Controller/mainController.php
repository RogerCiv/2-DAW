<?php

require_once("Model/User.php");
require_once("Model/UserRepository.php");

require_once("Model/Song.php");
require_once("Model/SongRepository.php");

require_once("Model/ReproductionList.php");



session_start();
if(!empty($_GET['c'])){
  if($_GET['c'] == "user"){
      require_once("Controller/userController.php");
  }
  if($_GET['c'] == "song"){
      require_once("Controller/addSongController.php");
  }

}

$songs = SongRepository::getSongs();
  include("View/mainView.phtml");




?>