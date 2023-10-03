<?php

class Publicacion{
    private $title = "";
    private $text = "";
    private $date;
    private $id;
    
    public function __construct($datos){
        $this->id = $datos['id'];
        $this->title = $datos['title'];
        $this->text = $datos['text'];
        $this->date =$datos['pubdate'];
    }

    public function getText(){
        return $this->text;
    }
    public function setText($t){
        $this->text = $t;
    }

    public function __toString() {
        return "Título: " . $this->title . ", Texto: " . $this->text . ", Fecha: " . $this->date->format('d/m/y');
    }
}

?>