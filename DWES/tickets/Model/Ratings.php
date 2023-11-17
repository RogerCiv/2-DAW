<?php

class Ratings{
    private $id;
    private $ticket_id;
    private $user_id;
    private $rating;

    public function __construct($datos){
        $this->id = $datos["id"];
        $this->ticket_id = $datos["ticket_id"];
        $this->user_id = $datos["user_id"];
        $this->rating = $datos["rating"];
    }

    public function getId(){
        return $this->id;
    }
    public function get_ticket_id(){
        return $this->ticket_id;
    }
    public function get_user_id(){
        return $this->user_id;
    }
    public function get_rating(){
        return $this->rating;
    }
}




?>