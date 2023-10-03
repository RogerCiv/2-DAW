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
    public function getUser(){
        return $this->user;
    }
    public function setUser($user){
        $this->user = $user;
    }
    public function getRol(){
        return $this->rol;
    }
    public function setRol($rol){
        $this->rol = $rol;
    }

    public function getId(){
        return $this->id;
    }
}
?>