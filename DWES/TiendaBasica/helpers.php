<?php
// helpers.php
function calcularTotalCarrito($cart)
{
    $total = 0;
    foreach ($cart as $item) {
        $total += $item['quantity'] * $item['product']->getPrice();
    }
    return $total;
}


?>