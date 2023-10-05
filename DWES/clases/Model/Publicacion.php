<?php

class Publicacion{
    private $titulo="";
    private $texto="";
    private $fecha="";
    private $id;

    public function __construct($datos)
    {
        $this->titulo=$datos['title'];
        $this->texto=$datos['text'];
        $this->fecha=$datos['pubdate'];
        $this->id=$datos['id'];
    }
    
    public function getText(){
        return $this->texto;
    }

    public function setText($t){
        $this->texto=$t;
    }







}

?>