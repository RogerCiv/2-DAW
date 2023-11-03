<?php

class SongRepository
{

  public static function addSong($datos, $files)
  {
    $image = $files['img']['name'];
    move_uploaded_file($files['img']['tmp_name'], 'public/img/' . $image);
    $mp3 = $files['file']['name'];
    move_uploaded_file($files['file']['tmp_name'], 'public/mp3/' . $mp3);
    
    $bd = Conectar::Conexion();
    $userId = $_SESSION['user']->getId();
    
    $sql = "INSERT INTO song (id,title, author, duration, img,user_id, file) VALUES (null,'" . $datos['title'] . "','" . $datos['author'] . "','" . $datos['duration'] . "','" . $image. "','" . $userId . "','" . $mp3. "')";

    echo $sql;
    //var_dump($datos);
    //var_dump($files);

    $result = $bd->query($sql);

    if (!$result) {
        echo "Error en la consulta: " . $bd->error;
    } else {
        echo "Inserción exitosa.";
    }
  }

  public static function getSongs($datos, $img, $mp3)
  {
    $bd = Conectar::conexion();
    $sql = "SELECT * FROM song";
    $result = $bd->query($sql);

    while ($datos = $result->fetch_assoc()) {
      $songs[] = new Song($datos);
    }

    return $songs;
  }

  public static function searchSong($song){
    $bd = Conectar::conexion();
    $sql = "SELECT * FROM song WHERE title LIKE '%$song%' OR author LIKE '%$song%' ";
    //echo $sql;
    
    $result = $bd->query($sql);
    $songs = array();
    while($datos = $result->fetch_assoc()){

        $song = new Song($datos);
        $songs[] = $song;
    }
    if(!$songs){
      echo 'No se han encontrado coincidencias';
    }
    return $songs;

  }
}
