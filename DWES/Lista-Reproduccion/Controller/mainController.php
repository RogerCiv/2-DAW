<?php
/*
error_reporting(E_ALL);
ini_set('display_errors', 1);
*/
require_once("Model/User.php");
require_once("Model/UserRepository.php");

require_once("Model/Song.php");
require_once("Model/SongRepository.php");

require_once("Model/Playlist.php");
require_once("Model/PlaylistRepository.php");

session_start();



if(!empty($_GET['c'])){
  if($_GET['c'] == "user"){
      require_once("Controller/userController.php");
  }
  if($_GET['c'] == "song"){
      require_once("Controller/addSongController.php");
  }
  if($_GET['c'] == "playlist"){
    require_once("Controller/playlistController.php");
  }

}
if(empty($_SESSION['user'])){
  include("View/loginView.phtml");
  
}
//$pls = PlaylistRepository::getPlaylistById($_SESSION['user']->getId()); 
$allPls = PlaylistRepository::getAllPlaylist();

//$songs = SongRepository::getSongs();
  include("View/mainView.phtml");




?>