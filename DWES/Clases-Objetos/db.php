<?php
class Conectar {
    public static function conexion(){
        $conexion = new mysqli("localhost","root","","publicaciones");
        //$conexion = new mysqli("db","root","test","publicaciones");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
}
?>