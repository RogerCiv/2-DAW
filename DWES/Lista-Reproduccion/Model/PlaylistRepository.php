<?php

class PlaylistRepository
{
    public static function createPlaylist($datos)
    {

        $bd = Conectar::conexion();
        $userId = $_SESSION['user']->getId();
        $sql = "INSERT INTO playlist (id,name,user_id) VALUES (null,'" . $datos['name'] . "','" . $userId . "')";

        //echo $sql;
        $bd->query($sql);
    }

    public static function getAllPlaylist()
    {
        $bd = Conectar::conexion();
        $sql = "SELECT * FROM playlist";

        $result = $bd->query($sql);
        $playlists = array();
        while ($datos = $result->fetch_assoc()) {
            $pl = new Playlist($datos);
            $playlists[] = $pl;
        }
        return $playlists;
    }

    public static function addSongToPlayList($songId, $playListId)
    {
        $bd = Conectar::conexion();
        $sql = "INSERT INTO song_pl (id,id_song,id_pl) VALUES (null,$songId,$playListId)";
        echo $sql;
        $result = $bd->query($sql);
        if (!$result) {
            echo "Error: " . mysqli_error($bd);
        } else {
            echo "Inserción exitosa";
        }
    }

    public static function followPlaylist($plId,$userId){
        $bd = Conectar::conexion();
        $sql = "INSERT INTO user_plfav (id,user_id,id_pl) VALUES (null,$userId,$plId)";
        echo $sql;
        $result = $bd->query($sql);
        if (!$result) {
            echo "Error: " . mysqli_error($bd);
        } else {
            echo "Siguendo playlist";
        }
    }


    /*
    public static function getPlaylistById($userId){
        $bd = Conectar::conexion();
        $userId = $_SESSION['user']->getId();
        $sql = "SELECT * FROM playlist WHERE user_id = $userId";
        
        $result = $bd->query($sql);

        while($datos=$result->fetch_assoc()){
            $plById = new Playlist($datos);
            
        }

        return $plById;
        
    }
    */
}
