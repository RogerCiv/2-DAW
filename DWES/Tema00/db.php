<?php
class Conectar {
    public static function conexion() {
        $conexion = new mysqli("db", "root", "test", "pelis");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
}
?>
