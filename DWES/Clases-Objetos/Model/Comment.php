<?php

class Comment{
    private $id;
    private $user;
    private $text;
    private $date;
    private $img;

    public function __construct($datos){
        $this->id = $datos['id'];
        $this->text = $datos['comment'];
        $this->date = $datos['comment_date'];
        $this->user = UserRepository::getUserById($datos['user_id']); // Usar 'user_id' en lugar de 'id'
    }
    

    public function getId(){
        return $this->id;
    }

    public function getText(){
        return $this->text;   
    }

    public function getComment(){
        return $this->text;

    }

    public function getUser(){
        return $this->user;
    }

   
}


?>