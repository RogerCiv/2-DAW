<?php

if(!empty($_GET['addSong'])){
  include("View/addSongView.phtml");
  die;
}

if(!empty($_POST['addSong'])){
  SongRepository::addSong($_POST,$_FILES);
}

?>