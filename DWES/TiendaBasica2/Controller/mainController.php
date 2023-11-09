<?php

require_once("Model/User.php");
require_once("Model/UserRepository.php");

require_once("Model/Product.php");
require_once("Model/ProductRepository.php");

require_once("Model/CarUtility.php");

require_once("Model/Linea.php");
require_once("Model/LineaRepository.php");

require_once("Model/Order.php");
require_once("Model/OrderRepository.php");

session_start();


if (!empty($_GET['c'])) {
    if ($_GET['c'] == "user") {
        require_once("Controller/userController.php");
    }
    if ($_GET['c'] == "product") {
        require_once("Controller/productController.php");
    }
    if ($_GET['c'] == "admin") {
        require_once("Controller/adminController.php");
    }
}


if (empty($_SESSION['user'])) {
    include("View/loginView.phtml");
}

$products = ProductRepository::getAllProducts();
if(!empty($_SESSION["user"])) {
    $totalCarrito = CartUtility::calcularTotalCarrito($_SESSION['user']->getCart());
}
include("View/mainView.phtml");


