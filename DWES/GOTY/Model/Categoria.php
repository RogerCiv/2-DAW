<?php

class Categoria{
    private $id;
    private $name;

    public function __construct($datos){
        $this->id = isset($datos["id"]) ? $datos["id"] : null;
        $this->name = $datos["name"];
    }

    public function getId(){
        return $this->id;
    }
    public function getName(){
        return $this->name;
    }
}


?>