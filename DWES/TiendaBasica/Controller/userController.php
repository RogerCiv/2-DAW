<?php
if (!empty($_POST['login'])) {
    // Validación y configuración de la sesión aquí
    $_SESSION['user'] = UserRepository::validar($_POST['usuario'], $_POST['password']);

    if ($_SESSION['user']) {    
        header("Location: index.php");
        exit;
    }
}
if(!empty($_GET['register'])){
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

if(!empty($_POST['addToCart'])){
    $productID = $_POST['productID'];
    $amount = $_POST['quantity'];
   


    $product = ProductRepository::getProductById($productID);

    if($product && $amount <= $product->getStock()){
        $_SESSION['user']->addToCart($product,$amount);
    }

}


?>