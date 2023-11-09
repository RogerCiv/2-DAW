<?php

class OrderRepository
{
    public static function getActiveOrderByUserID($userId)
    {
        try {
            $bd = Conectar::conexion();
            $sql = "SELECT id FROM orders WHERE u_id = $userId AND state = 0";
            $result = $bd->query($sql);
            
            if ($result->num_rows > 0) {
                $orderData = $result->fetch_assoc();
                return $orderData['id'];
            }
            
            return null;
        } catch (Exception $e) {
            echo 'Error al obtener la orden activa: ' . $e->getMessage();
            exit;
        }
    }
    
    public static function createOrder($userID)
    {
        try {
            $bd = Conectar::conexion();
            $datetime = (new DateTime())->format('Y-m-d H:i:s');
            $sql = "INSERT INTO orders (u_id, state,datetime) VALUES ($userID, 0,'".$datetime."')";
            
           echo $sql;
            $result = $bd->query($sql);

            if ($result) {
                return $bd->insert_id; // Devuelve el ID de la orden recién creada
            }

            echo "Error al crear la orden: " . $bd->error;
            exit;
        } catch (Exception $e) {
            echo 'Error al crear la orden: ' . $e->getMessage();
            exit;
        }
    }

    public static function getOrdersByUserID($userId)
    {
        try {
            $bd = Conectar::conexion();

            $sql = "SELECT * FROM orders WHERE u_id = $userId";

            $result = $bd->query($sql);

            if (!$result) {
                echo "Error al obtener los pedidos: " . $bd->error;
                exit;
            }

            $orders = array();
            while($datos=$result->fetch_assoc()){
                $orders[] = new Order($datos);
            }

            return $orders;
        } catch (Exception $e) {
            echo 'Error al obtener los pedidos: ' . $e->getMessage();
            exit;
        }
    }

    public static function updateOrderState($orderID,$newState)
    {
        try{

            $bd= Conectar::conexion();
            $sql = "UPDATE orders SET state = $newState WHERE id = $orderID";
            
            $result=$bd->query($sql);
            
            if(!$result){
                echo "Error al actualizar el State de la order: ". $bd->error;
                exit;
            }
        }catch(Exception $e){
            throw new Exception("Error al actualizar el state de la order: ". $e->getMessage());
            exit;
        }
    }
}
