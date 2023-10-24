<?php

class SongRepository{

  public static function addSong($datos)
  {
      $bd = Conectar::Conexion();
  
      // Verifica si todos los campos necesarios están presentes en $datos
      if (isset($datos['title'], $datos['artist'], $datos['duration'], $datos['img'], $datos['file'])) {
          // Utiliza sentencias preparadas para evitar inyecciones SQL
          $sql = "INSERT INTO song (title, artist, duration, img, ruta) VALUES (?, ?, ?, ?, ?)";
  
          // Prepara la sentencia
          $stmt = $bd->prepare($sql);
  
          if ($stmt) {
              // Vincula los valores de $datos a la sentencia preparada
              $stmt->bind_param("sssss", $datos['title'], $datos['artist'], $datos['duration'], $datos['img'], $datos['file']);
  
              // Ejecuta la sentencia preparada
              if ($stmt->execute()) {
                  echo 'Canción añadida con éxito';
              } else {
                  echo 'Error al añadir la canción';
              }
  
              // Cierra la sentencia
              $stmt->close();
          } else {
              echo 'Error en la preparación de la sentencia';
          }
      } else {
          echo 'Faltan datos necesarios';
      }
  }

  public static function getSongs($datos,$img,$mp3){
    $bd = Conectar::conexion();
    $sql = "SELECT * FROM song";
    $result = $bd->query($sql);

    while($datos = $result->fetch_assoc()){
      $songs[] = new Song($datos);
    }

    return $songs;
  }
  

}


?>