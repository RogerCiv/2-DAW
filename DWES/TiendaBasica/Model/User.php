<?php
class User
{
    private $id;
    private $name;
    private $password;
    private $rol;
    private $cart;
    private $order;


    public function __construct($datos)
    {
        $this->id = $datos['id'];
        $this->name = $datos['name'];
        $this->password = $datos['password'];
        $this->rol = $datos['rol'];
        $this->cart = array();
        $this->order = array();
    }
    public function getName()
    {
        return $this->name;
    }

    public function getPassword()
    {
        return $this->password;
    }
    public function getId()
    {
        return $this->id;
    }

    public function getRol()
    {
        return $this->rol;
    }

    public function getOrder(){
        //Hacer consultas
        return $this->order;
    }

    public function getCart(){
        //hacer consultas
        return $this->cart;
    }
    public function addToCart(Product $product, $quantity)
    {
        if ($quantity > 0) {
            // Verifica si el producto ya está en el carrito
            foreach ($this->cart as &$item) {
                if ($item['product']->getId() === $product->getId()) {
                    // El producto ya está en el carrito, actualiza la cantidad
                    $item['quantity'] += $quantity;

                    return;
                }
            }

            // El producto no está en el carrito, agrégalo
            $this->cart[] = [
                'product' => $product,
                'quantity' => $quantity,
            ];
        }
    }
/*
    public static function calcularTotalCarrito($cart)
    {
        $total = 0;
        foreach ($cart as $item) {
            $total += $item['quantity'] * $item['product']->getPrice();
        }
        return $total;
    }
    */
}
