<?php 

class RatingsRepository{

    public static function insertRating($userId, $valoracion,$idTicket){
        $bd = Conectar::conexion();
        $sql ="INSERT INTO ratings WHERE ticket_id = $idTicket  AND  user_id  = $userId AND rating = $valoracion";
        $bd->query($sql);
    }
}



?>