<?php

class Tickets
{
    private $id;
    private $user_id;
    private $title;
    private $text;
    private $status;
    private $id_trabajador;

    public function __construct($datos)
    {
        $this->id = $datos["id"];
        $this->user_id = $datos["user_id"];
        $this->title = $datos["title"];
        $this->text = $datos["text"];
        $this->status = $datos["status"];
        $this->id_trabajador = $datos["id_trabajador"];
    }
    public function getId()
    {
        return $this->id;
    }
    public function setId($id)
    {
        $this->id = $id;
    }
    public function getUserId()
    {
        return $this->user_id;
    }
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }
    public function getTitle()
    {
        return $this->title;
    }
    public function setTitle($title)
    {
        $this->title = $title;
    }
    public function getText()
    {
        return $this->text;
    }
    public function setText($text)
    {
        $this->text = $text;
    }
    public function getStatus(){
        return $this->status;
    }
    public function setStatus($status)
    {   
        $this->status = $status;
    }
    public function getIdTrabajador(){
        return $this->id_trabajador;
    }
    public function setIdTrabajador($id_trabajador){
        $this->id_trabajador = $id_trabajador;
    }
}
