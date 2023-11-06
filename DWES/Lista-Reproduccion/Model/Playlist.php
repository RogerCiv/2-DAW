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
    $bd =Conectar::conexion();
    $sql = "SELECT *
    FROM song_pl sp
    INNER JOIN song s ON sp.id_song = s.id
    WHERE sp.id_pl =  $this->id";
    
    $result = $bd->query($sql);
    $songs = array();
    while($datos=$result->fetch_assoc()){
      $songs[] = $datos;
    }
    return $songs;
  }

  public function getDuration(){
      $bd = Conectar::conexion();
      $sql = "SELECT SUM(s.duration) AS total_duration
              FROM song_pl sp
              INNER JOIN song s ON sp.id_song = s.id
              WHERE sp.id_pl = $this->id";
  
      $result = $bd->query($sql);
      $data = $result->fetch_assoc();
      $totalDurationSeconds = $data['total_duration'];

      $totalDurationSeconds = $data['total_duration'];

      // Calcula horas y minutos
      $hours = floor($totalDurationSeconds / 3600);
      $totalDurationSeconds -= $hours * 3600;
      $minutes = floor($totalDurationSeconds / 60);
  
      // Formatea el resultado como HH:MM
      $formattedDuration = sprintf('%02d:%02d', $hours, $minutes);
  
      return $formattedDuration;
  }

 }
