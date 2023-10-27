<?php
 class Song{
  private $id;
  private $title;
  private $author;
  private $duration;
  private $img;
  private $user_id;
  private $file;

  public function __construct($datos){
    $this->id = $datos['id'];
    $this->title = $datos['title'];
    $this->author = $datos['author'];
    $this->duration = $datos['duration'];
    $this->file = $datos['file'];
    $this->user_id = $datos['user_id'];
  }

  public function getId(){
    return $this->id;
  }
  public function getUserId(){
    return $this->user_id;
  }

  public function getTitle(){
    return $this->title;
  }
  public function getAuthor(){
    return $this->author;
  }
  public function getDuration(){
    return $this->duration;
  }

  public function getImg(){
    return $this->img;
  }

  public function getFile(){
    return $this->file;
  }
  
 }
