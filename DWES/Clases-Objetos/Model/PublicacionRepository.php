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


    public static function newPub($datos,$img) {
        $image=$img['img']['name'];

        move_uploaded_file($img['img']['tmp_name'], 'public/img/'. $image);
        $bd = Conectar::conexion();
        $q = "INSERT INTO publicacion VALUES (null,'" . $datos['title'] . "','" . $datos['text'] . "',NOW(),'". $image. "')";
        // echo $q;
        $bd->query($q);
        return $bd->insert_id;
    }
}

?>
