<?php

if(!empty($_GET['addPlaylist'])){
    include("View/addPlaylistView.phtml");
    die;
}

if(!empty($_POST['addPlaylist'])){
    PlaylistRepository::createPlaylist($_POST);
}

if(!empty($_GET['playlistId'])){
    $playlistId = $_GET['playlistId'];
    //var_dump($playlistId);

   $pl = PlaylistRepository::getAllPlaylist();
   // var_dump($pl);
        include("View/playlistInfoView.phtml");
        die;
}

if(!empty($_GET['editPlaylist'])){
    $playlistId = $_GET['loadIdplaylist'];
    $_SESSION['playListId'] = $playlistId;
    include("View/editPlaylistView.phtml");
    die;
}

if(!empty($_POST['searchSong']) && !empty($_SESSION['playListId'])){
    $search = $_POST['song'];
    //var_dump($search);
    $resultSearch = SongRepository::searchSong($search);
    include("View/editPlaylistView.phtml");
    die;
}

if(!empty($_GET["addSongPlaylist"])){
    $songId = $_GET["songId"];
    $playListId = $_GET['playListId'];
    PlaylistRepository::addSongToPlayList($songId, $playListId);
    include("View/editPlaylistView.phtml");
    die;
}

if(!empty($_GET['follow'])){
    $playListId = $_GET['loadIdplaylist'];
    $userId = $_SESSION['user']->getId();
    PlaylistRepository::followPlaylist($playListId,$userId);
    include("View/mainView.phtml");
    die;
}
/*

        if ($playlist) {
        // Comprueba si el usuario actual es el propietario de la lista de reproducción
        $isOwner = ($_SESSION['user']->getId() === $playlist->getIdUser());

        // Si es propietario, permite la edición
        if ($isOwner) {
            // Lógica para la edición de la lista de reproducción
            if (!empty($_POST['editPlaylist'])) {
                // Aquí deberías procesar la edición de la lista de reproducción
            }
        }

        include("View/playlistInfoView.phtml");
        die;
    }
    }
*/

?>