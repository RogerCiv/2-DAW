<?php

class PublicacionRepository
{

    public static function getPublicaciones()
    {
        //cunsulta a la bd
        $bd = Conectar::conexion();
        $q = "SELECT * FROM publicacion";
        $result = $bd->query($q);
        while ($datos = $result->fetch_assoc()) {
            $pubs[] = new Publicacion($datos);
        }
        //construir con el modelo un array de publicaciones 
        //devuelve array
        return $pubs;
    }

    public static function publicar()
    {
        $bd = Conectar::conexion();
        $q = "INSERT INTO publicacion VALUES (null,'" . $_POST['title'] . "','" . $_POST['text'] . "','" . date('Y-m-d H:i:s') . "')";
        // echo $q;
        $result = $bd->query($q);
    }
}
