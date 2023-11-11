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

    public function getOrder()
    {
        //Hacer consultas
        return $this->order;
    }

    public function getCart()
    {
        //hacer consultas
        return $this->cart;
    }
    // Dentro de la clase User en User.php
    public function clearCart()
    {
        $this->cart = array();
    }

    public function addToCart(Product $product, $quantity)
    {
        if ($quantity > 0) {
            // Verifica si el producto ya está en el carrito
            foreach ($this->cart as &$item) {
                if ($item['product_id'] === $product->getId()) {
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

    public function finalizePurchase()
    {
        $orderID = OrderRepository::getActiveOrderByUserID($this->id);

        if (!$orderID) {
            $orderID = OrderRepository::createOrder($this->id);
        }

        foreach ($this->cart as $item) {
            $product = $item['product'];
            $quantity = $item['quantity'];

            // Agregar a la tabla 'linea'
            LineaRepository::addLinea($orderID, $product->getId(), $quantity, $product->getPrice());

            // Actualizar el stock en la tabla 'product'
            $newStock = $product->getStock() - $quantity;
            ProductRepository::updateStock($product->getId(), $newStock);
        }

        // Limpiar el carrito
        $this->cart = array();
    }
    public function setCart($cart){
        $this->cart = $cart;
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
