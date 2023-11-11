<?php

class CartUtility
{
    public static function calcularTotalCarrito($cart)
    {
        $total = 0;
        foreach ($cart as $item) {
            $productID = $item["product_id"];
            $product = ProductRepository::getProductById($productID);
            if($product){

                $total += $item['quantity'] * $product->getPrice();
            }
        }
        return $total;
    }
}

?>