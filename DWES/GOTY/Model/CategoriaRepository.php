<?php

class CategoriaRepository {
    public static function getAllCategories(){
        $bd= Conectar::conexion();
        $sql="SELECT * FROM categorias";
        $result= $bd->query($sql);

        $categorias =array();
        while($datos=$result->fetch_assoc()){
            $categorias[]=new Categoria($datos);
        }

        return $categorias;
    }

    public static function getCategoriaById($idCategoria){
        $bd = Conectar::conexion();
        $sql = "SELECT name FROM categorias WHERE id = $idCategoria";

        $result = $bd->query($sql);

        if ($result->num_rows > 0) {
            $datos = $result->fetch_assoc();
            return new Categoria($datos);
        }
    }
}