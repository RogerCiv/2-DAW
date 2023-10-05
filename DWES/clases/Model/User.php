<?php

class User{
    private $id;
    private $name;
    private $rol;

    public function __construct($datos)
    {
        $this->id=$datos['id'];
        $this->name=$datos['name'];
        $this->rol=$datos['rol'];
    }

    public function getUserName(){
        return $this->name;
    }

    public function getRol(){
        return $this->rol;
    }
}
