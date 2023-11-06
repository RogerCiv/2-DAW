<?php

class Linea{
    private $id;
    private $p_id;
    private $amount;
    private $o_id;
    private $price_p;

    public function __construct($datos){
        $this->id = $datos["id"];
        $this->p_id = $datos["p_id"];
        $this->amount = $datos["amount"];
        $this->o_id = $datos["o_id"];
        $this->price_p = $datos["price"];
    }

    public function getId(){
        return $this->id;
    }
    public function get_p_id(){
        return $this->p_id;
    }
    public function get_amount(){
        return $this->amount;
    }
    public function get_o_id(){
        return $this->o_id;
    }
    public function getPriceProduct(){
        return $this->price_p;
    }
}

?>