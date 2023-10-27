<?php

class PlaylistRepository {
    public static function createPlaylist($datos){

        $bd = Conectar::conexion();
        $userId = $_SESSION['user']->getId();
        $sql = "INSERT INTO playlist (id,name,user_id) VALUES (null,'". $datos['name']. "','". $userId ."')";

        echo $sql;
        $bd->query($sql);
    }
}

?>