<?php

class Publicacion{
    private $title="";
    private $texto="";
    private $fecha="";
    private $id;

    public function __construct($datos)
    {
        $this->title=$datos['title'];
        $this->texto=$datos['text'];
        $this->fecha=$datos['pubDate'];
        $this->id=$datos['id'];
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
}

?>