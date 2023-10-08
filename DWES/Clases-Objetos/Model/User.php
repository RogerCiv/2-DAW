<?php
class User{
    private $id;
    private $user ;
    private $rol;

    public function __construct($datos){
        $this->id = $datos['id'];
        $this->user = $datos['user'];
        $this->rol = $datos['rol'];
    }
    public function getUserName(){
        return $this->user;
    }

    public function getId(){
        return $this->id;
    }

    public function getRol(){
        return $this->rol;
    }
}
?>