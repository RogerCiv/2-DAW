<?php
 class Song{
  private $id;
  private $title;
  private $artist;
  private $duration;
  private $img;
  private $ruta;

  public function __construct($datos){
    $this->id = $datos['id'];
    $this->title = $datos['title'];
    $this->artist = $datos['artist'];
    $this->duration = $datos['duration'];
    $this->ruta = $datos['ruta'];
  }

  public function getId(){
    return $this->id;
  }

  public function getTitle(){
    return $this->title;
  }
  public function getArtist(){
    return $this->artist;
  }
  public function getDuration(){
    return $this->duration;
  }

  public function getImg(){
    return $this->img;
  }

  public function getRuta(){
    return $this->ruta;
  }
  
 }
