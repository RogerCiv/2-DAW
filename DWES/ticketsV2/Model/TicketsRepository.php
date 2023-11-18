<?php

class TicketsRepository{
    public static function insertTickets($title,$text,$userId){
        $bd = Conectar::conexion();
        $sql = "INSERT INTO tickets (title, text, user_id, status,id_trabajador) 
            VALUES ('$title', '$text',$userId, 0,0)";
        $bd->query($sql);
    }

    public static function cerrarTicket($idTicket){
        $bd = Conectar::conexion();
        $sql = "UPDATE tickets SET status = 'cerrado' WHERE id = $idTicket";
        $bd->query($sql);
    }

    public static function updateTickets($idTicket, $text){
        $bd = Conectar::conexion();
        $sql = "UPDATE tickets SET text = '$text' WHERE id = $idTicket";
        //echo $sql;
        $bd->query($sql);
    }
    

    public static function getAllTicketsById($userId){
        $bd = Conectar::conexion();
        $sql = "SELECT * FROM tickets WHERE user_id = $userId AND id_trabajador = 0 AND status = 0";
        
        $result = $bd->query($sql);
        $tickets = array();
        while($datos=$result->fetch_assoc()){
            $tickets[] = $datos;
        }
        
        return $tickets;
        
    }
    public static function getAllTicketsByIdWhitResponse($userId){
        $bd = Conectar::conexion();
        $sql = "SELECT t.*, r.response_text 
        FROM tickets t
        LEFT JOIN responses r ON t.id = r.ticket_id
        WHERE t.user_id = $userId AND t.id_trabajador != 0 AND t.status = 'abierto'";
        
        $result = $bd->query($sql);
        $tickets = array();
        while($datos=$result->fetch_assoc()){
            $tickets[] = $datos;
        }
        
        return $tickets;
        
    }
    public static function getAllTicketsClosed($userId){
        $bd = Conectar::conexion();
        $sql = "SELECT t.*, r.response_text 
        FROM tickets t
        LEFT JOIN responses r ON t.id = r.ticket_id
        WHERE t.user_id = $userId AND t.id_trabajador != 0 AND t.status = 'cerrado'";
        
        $result = $bd->query($sql);
        $tickets = array();
        while($datos=$result->fetch_assoc()){
            $tickets[] = $datos;
        }
        
        return $tickets;
        
    }
    public static function getAllTickets(){
        $bd = Conectar::conexion();

        $sql = "SELECT * FROM tickets WHERE id_trabajador = 0";
        
        $result = $bd->query($sql);
        $tickets = array();
        while($datos=$result->fetch_assoc()){
            $tickets[] = $datos;
        }
        
        return $tickets;
        
    }

    public static function getAllTicketsWhitT($idTrabajador){
        $bd = Conectar::conexion();

        $sql = "SELECT * FROM tickets WHERE id_trabajador = $idTrabajador AND status = 'abierto'";
        
        $result = $bd->query($sql);
        $tickets = array();
        while($datos=$result->fetch_assoc()){
            $tickets[] = $datos;
        }
        
        return $tickets;
        
    }

    public static function updateTicketIdTrabajador($idTrabajador,$idTicket){
        $bd = Conectar::conexion();
        $sql = "UPDATE tickets SET id_trabajador = $idTrabajador WHERE id = $idTicket";
        $bd->query($sql);
    }


}




?>