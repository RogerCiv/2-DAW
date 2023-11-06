<?php

if(!empty($_GET["addProduct"])){
    include("View/addProduct.phtml");
    die;
}
if(!empty($_POST["addProduct"])){
    ProductRepository::addProduct($_POST,$_FILES);
}

?>