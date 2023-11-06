<?php
class User
{
    private $id;
    private $name;
    private $password;
    private $rol;


    public function __construct($datos)
    {
        $this->id = $datos['id'];
        $this->name = $datos['name'];
        $this->password = $datos['password'];
        $this->rol = $datos['rol'];
    }
    public function getName()
    {
        return $this->name;
    }

    public function getPassword()
    {
        return $this->password;
    }
    public function getId()
    {
        return $this->id;
    }

    public function getRol()
    {
        return $this->rol;
    }

    public function getOrders(){
        //Hacer consultas
    }

    public function getCarrito(){
        //hacer consultas
    }
}
