<?php
 class ReproductionList {
  private $id;
  private $titleRL;
  private $id_user;
  private $songs;

  public function __construct($datos){
    $this->id = $datos['id'];
    $this->titleRL = $datos['titleRL'];
    $this->id_user = $datos['id_user'];
    $this->songs = $datos['songs'];

  }

  public function getId(){
    return $this->id;
  }
  public function getTitle(){
    return $this->titleRL;
  }
  public function getIdUser(){
    return $this->id_user;
  }
  public function getSongs(){
    return $this->songs;
  }
  
 }


?>