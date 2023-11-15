<?php

class Categoria{
    private $id;
    private $name;

    public function __construct($datos){
        $this->id = $datos["id"];
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