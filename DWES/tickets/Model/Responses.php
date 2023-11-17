<?php

class Responses{

    private $id;
    private $ticket_id;
    private $user_id;
    private $response_text;


    public function __construct($datos){
        $this->id = $datos["id"];
        $this->ticket_id = $datos["ticket_id"];
        $this->user_id = $datos["user_id"];
        $this->response_text = $datos["response_text"];

    }

    public function getId(){
        return $this->id;
    }
    public function getTicketId(){
        return $this->ticket_id;
    }
    public function getUserId(){
        return $this->user_id;
    }
    public function getResponseText(){
        return $this->response_text;
    }

}



?>