<?php

class Cart{
    private $items;

    public function __construct(){
        $this->items = array();
    }

    public function addToCart($productID,$quantity){
        $this->items[] = array('product_id'=> $productID,'quantity'=> $quantity);
    }
    public function getItems(){
        return $this->items;
    }

    public function clearCart(){
        $this->items = array();
    }
}


?>