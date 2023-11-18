<?php 

class RatingsRepository{

    public static function insertRating($userId, $valoracion,$idTicket){
        $bd = Conectar::conexion();
        //$sql ="INSERT INTO ratings (user_id, rating, ticket_id) VALUES ($userId, $valoracion, $idTicket)";
        $sql = "
            INSERT INTO ratings (user_id, rating, ticket_id) 
            VALUES ($userId, $valoracion, $idTicket) 
            ON DUPLICATE KEY UPDATE rating = $valoracion";
        echo $sql;
        $bd->query($sql);
    }
}



?>