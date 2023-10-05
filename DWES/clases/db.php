<?php
class Conectar{
    public static function conexion(){
        //$conexion=new mysqli("localhost","root","","test");
        $conexion = new mysqli("localhost","root","","publicaciones");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
}
?>