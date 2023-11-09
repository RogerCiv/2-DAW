<?php

class LineaRepository
{
    public static function addLinea($orderID, $productID, $quantity, $price)
    {
        try {
            $bd = Conectar::conexion();

            $sql = "INSERT INTO linea (id,p_id, amount, o_id, price_p) 
                    VALUES (null,$productID,$quantity,$orderID,$price)";

            $result = $bd->query($sql);

            if (!$result) {
                echo "Error al agregar la línea: " . $bd->error;
                exit;
            }
        } catch (Exception $e) {
            echo 'Error al agregar la línea: ' . $e->getMessage();
            exit;
        }
    }
    public static function getLineasByOrderId($orderId)
    {
        $bd = Conectar::conexion();

        $sql = "SELECT * FROM linea WHERE o_id = $orderId";

        $result = $bd->query($sql);

        $lineas = array();
        while($datos=$result->fetch_assoc()){
            $linea = new Linea($datos);
            $lineas[] = $linea;
        }

        return $lineas;
    }
}



?>