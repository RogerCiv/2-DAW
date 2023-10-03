<?php

class PublicacionRepository{

    public static function getPublicaciones(){
        //Consultar a la BBDD
        $bd=Conectar::conexion();
        $sql = "SELECT * FROM publicacion";

        $result=$bd->query($sql);

        if (!$result) {
            die("Error en la consulta: " . $bd->error);
        }

        //COnstruir con el modelo un array de publicaciones
        while($datos=$result->fetch_assoc()){
            $pubs[]= new Publicacion($datos);
        }
        //devolver el array
        return $pubs;

    }

    
}
