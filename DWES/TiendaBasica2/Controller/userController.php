<?php
if (!empty($_POST['login'])) {
    // Validación y configuración de la sesión aquí
    $_SESSION['user'] = UserRepository::validar($_POST['usuario'], $_POST['password']);

    if(!empty($_SESSION['user'])){
        $userID = $_SESSION['user']->getId();
        $cartItems = CartRepository::getCartByUserID($userID);
        $_SESSION['user']->setCart($cartItems);
    }
    if ($_SESSION['user']) {
        header("Location: index.php");
        exit;
    }
}
if (!empty($_GET['register'])) {
    include("View/registerView.phtml");
    die;
}

if (!empty($_POST['logout'])) {
    // Manejo del cierre de sesión
    UserRepository::logout();
    //session_destroy();

    header("Location: index.php");
    exit;
}

if (!empty($_POST['register'])) {
    UserRepository::register($_POST['usuario'], $_POST['password']);

    //  header("Location: index.php");
    //include("View/loginView.phtml");
    //exit;
}

if (!empty($_POST['addToCart'])) {
    $productID = $_POST['productID'];
    $amount = $_POST['quantity'];

    $product = ProductRepository::getProductById($productID);

    if ($product && $amount <= $product->getStock()) {
        $_SESSION['user']->addToCart($product, $amount);

        CartRepository::addToCart($_SESSION['user']->getId(), $productID, $amount);
    }
}

if(!empty($_SESSION['user'])){
    $userID = $_SESSION['user']->getId();
    $cartItems = CartRepository::getCartByUserID($userID);
    $_SESSION['user']->setCart($cartItems);
}
if (!empty($_GET['shopEnd'])) {
    if(empty($_SESSION['user']->getCart())){
        header("Location: index.php");
        die;
    }
    // Crear una nueva orden en la base de datos
    $orderID = OrderRepository::createOrder($_SESSION['user']->getId());

    // Recorrer el carrito del usuario y crear registros en la tabla "linea" para cada producto en la orden
    foreach ($_SESSION['user']->getCart() as $item) {
        $productID = $item['product_id'];
        $product = ProductRepository::getProductById($productID);
        LineaRepository::addLinea($orderID, $product->getId(), $item['quantity'], $product->getPrice());

        // Restar la cantidad comprada del stock de los productos en la tabla "product"
        $newStock = $product->getStock() - $item['quantity'];
        ProductRepository::updateStock($product->getId(), $newStock);
    }

    OrderRepository::updateOrderState($orderID, 1);
    CartRepository::clearCartByUserID($userID);
    // Limpiar el carrito del usuario
    $_SESSION['user']->clearCart();

    // Redirigir al usuario a una página de confirmación o a su historial de compras, por ejemplo.
    //header("Location: index.php?c=user&confirmation");

    header("Location: index.php?c=user&confirmation=1&orderID=$orderID");
    exit;
}

if (!empty($_GET['myOrders'])) {
    // Mostrar la confirmación o historial de compras
    $userId = $_SESSION['user']->getId();
    $orders = OrderRepository::getOrdersByUserID($userId);
    include("View/myOrdersView.phtml");
    exit;
}
