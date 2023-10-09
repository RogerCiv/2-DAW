<?php

class Publicacion{
    private $title="";
    private $texto="";
    private $date= NULL;
    private $id;
    private $img;
    private $comments;

    public function __construct($datos)
    {
        $this->title=$datos['title'];
        $this->texto=$datos['text'];
        $this->date=$datos['pubdate'];

        $this->id=$datos['id'];
        $this->img = $datos['img'];
        $this->comments= CommentRepository::getCommentsByPubId($datos['id']);
    }
    
    public function getText(){
        return $this->texto;
    }

    public function setText($t){
        $this->texto=$t;
    }
    public function getTitle(){
        return $this->title;
    }
    public function getImage(){
        return $this->img;
    }

    public function getId(){
        return $this->id;
    }

    public function getComments() {
        return $this->comments;
    }
    
}

?>