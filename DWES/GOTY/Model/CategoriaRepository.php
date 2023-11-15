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
}