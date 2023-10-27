<?php
class User{
    private $id;
    private $user ;
    private $rol;
    private $password;
    private $plfavs;
    private $mypls;

    public function __construct($datos){
        $this->id = $datos['id'];
        $this->user = $datos['user'];
        $this->password = $datos['password'];
        $this->rol = $datos['rol'];
    }
    public function getUserName(){
        return $this->user;
    }
  
    public function getPassword(){
        return $this->password;
    }
    public function getId(){
        return $this->id;
    }

    public function getRol(){
        return $this->rol;
    }

    public function getPlfavs(){

    }
   
    public function getMypls(){
        
    }


}
?>