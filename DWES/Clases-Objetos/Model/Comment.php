<?php

class Comment{
    private $id;
    private $user;
    private $text;
    private $date;

    public function __construct($datos){
        $this->id = $datos['id'];
        $this->text = $datos['comment_text'];
        $this->date = $datos['comment_date'];

        $this->user = UserRepository::getUserById($datos['id']);
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
   
}


?>