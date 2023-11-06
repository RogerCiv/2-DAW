<?php
class Conectar {
    public static function conexion(){
        try {
            $conexion = new mysqli("localhost","root","","tienda-basica");
            //$conexion = new mysqli("db","root","test","tienda-basica");
            $conexion->query("SET NAMES 'utf8'");
            return $conexion;
        } catch (Exception $e) {
            // Manejo de excepciones
            // Puedes personalizar el manejo de errores aquí
            die("Error de conexión a la base de datos: " . $e->getMessage());
        }
    }
}

?>