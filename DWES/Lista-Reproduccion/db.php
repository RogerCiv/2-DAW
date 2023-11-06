<?php
class Conectar {
    public static function conexion(){
        $conexion = new mysqli("localhost","root","","lista-reproduccion");
        //$conexion = new mysqli("db","root","test","lista-reproducion");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
}
?>