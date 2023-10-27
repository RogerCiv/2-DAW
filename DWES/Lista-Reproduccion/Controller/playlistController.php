<?php

if(!empty($_GET['addPlaylist'])){
    include("View/addPlaylistView.phtml");
    die;
}

if(!empty($_POST['addPlaylist'])){
    PlaylistRepository::createPlaylist($_POST);
}

?>