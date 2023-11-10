<?php

class CartRepository{
    public static function addToCart($userId,$productID,$quantity){
        $bd= Conectar::conexion();

        $sql = "INSERT INTO cart (id,user_id,product_id,quantity) VALUES (null,$userId,'".$productID."',$quantity)";

        $bd->query($sql);
    }

    public static function getCartByUserID($userId){

        $bd= Conectar::conexion();

        $sql ="SELECT * FROM cart WHERE user_id = $userId";

        $result= $bd->query($sql);

        $cartItems = array();

        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                $cartItems [] = array(
                    'product_id' => $row['product_id'],
                    'quantity'=> $row['quantity'],
                );
            }
        }
        return $cartItems;
    }

    public static function clearCartByUserID($userId){
        $bd= Conectar::conexion();
        $sql ="DELETE FROM cart WHERE user_id = $userId";
        $bd->query($sql);
    }
}
