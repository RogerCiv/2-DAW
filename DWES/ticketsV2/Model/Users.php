<?php

class Users{
    private $id;
    private $username;
    private $password;
    private $rol;

    public function __construct($datos){
        $this->id = $datos["id"];
        $this->username = $datos["username"];
        $this->password = $datos["password"];
        $this->rol = $datos["rol"];
    }

    public function getId(){
        return $this->id;
    }

    public function getUsername(){
        return $this->username;
    }
    public function getPassword(){
        return $this->password;
    }
    public function getRol(){
        return $this->rol;
    }
}



?>