<?php
 class Playlist {
  private $id;
  private $name;
  private $songs;
  private $user_id;
  private $duration;
  
  public function __construct($datos){
    $this->id = $datos['id'];
    $this->name = $datos['name'];
    $this->user_id = $datos['user_id'];
  }

  public function getId(){
    return $this->id;
  }
  public function getName(){
    return $this->name;
  }
  public function getIdUser(){
    return $this->user_id;
  }
  public function getSongs(){
    
  }

  public function getDuration(){
 
  }
  
 }


?>