<?php

class ResponseRepository{


    public static function setRespuesta($textoRespuesta,$idTrabajador,$idTicket){
        $bd = Conectar::conexion();
        $sql = "INSERT INTO responses (id,ticket_id,user_id,response_text) VALUES (null,$idTicket,$idTrabajador,'$textoRespuesta')";
        $bd->query($sql);
    }
}



?>