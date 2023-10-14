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

    public static function getPublicacionById($id){
        $bd = Conectar::conexion();
        $q = "SELECT * FROM publicacion WHERE id = ". $id;
        $result = $bd->query($q);
        /*
        while ($datos = $result->fetch_assoc()) {
            $pubs[] = new Publicacion($datos);
        }
        //construir con el modelo un array de publicaciones 
        //devuelve array
        return $pubs;
        */
    }

    public static function getPubById($id)
    {
        $bd = Conectar::conexion();
        $query = "SELECT * FROM publicacion WHERE id = $id";
        $result = $bd->query($query);

        if ($result->num_rows == 1) {
            $datos = $result->fetch_assoc();
            return new Publicacion($datos);
        }

        return null;
    }

    public static function updatePub($id, $title, $text, $image)
    {
        $bd = Conectar::conexion();

        if (!empty($image['name'])) {
            // Si se proporciona una nueva imagen, la actualizas.
            $imageFileName = $image['name'];
            move_uploaded_file($image['tmp_name'], 'public/img/' . $imageFileName);

            $query = "UPDATE publicacion SET title = '$title', text = '$text', img = '$imageFileName' WHERE id = $id";
        } else {
            // Si no se proporciona una nueva imagen, solo actualizas el título y el texto.
            $query = "UPDATE publicacion SET title = '$title', text = '$text' WHERE id = $id";
        }

        $bd->query($query);
    }


    public static function searchPubs($search,$sortBy){
        $bd = Conectar::conexion();

        if ($sortBy === 'date') {
            $orderBy = 'pubDate';
        } else {
            $orderBy = 'title';
        }

        $sql = "SELECT * FROM publicacion WHERE title LIKE '%$search%' OR text LIKE '%$search%' ORDER BY $orderBy";

       //$sql = "SELECT * FROM publicacion WHERE title LIKE '%".$search."%' OR text LIKE '%".$search."%'";

         $result = $bd->query($sql);
      
        if($result->num_rows > 0){

            while($datos=$result->fetch_assoc()){
               $pubs[] = new Publicacion($datos);
            }

            return $pubs;
        }else {
          
            echo 'No hubo coincidencias';
            
        }

    }
    
}

?>
