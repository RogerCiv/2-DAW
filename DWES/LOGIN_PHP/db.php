<?php
class Conectar {
    public static function conexion(){
        //$conexion = new mysqli("localhost","root","","pelis");
        $conexion = new mysqli("db","root","test","pelis");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
}

?>