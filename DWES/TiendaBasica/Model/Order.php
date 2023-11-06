<?php

class Order{
    private $id;
    private $lineas = [];
    private $u_id;
    private $state;
    private $datetime;

    public function __construct($datos){
        $this->id = $datos["id"];
        $this->lineas = $datos["lineas"];
        $this->u_id = $datos["u_id"];
        $this->state = $datos["state"];
        $this->datetime = $datos["datetime"];
    }

    public function getId(){
        return $this->id;
    }

    public function getLineas(){
        return $this->lineas;
    }

    public function getU_id(){
        return $this->u_id;
    }
    public function getState(){
        return $this->state;
    }
    public function getDatetime(){
        return $this->datetime;
    }
}

?>