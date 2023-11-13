<?php



if ($_GET['carrito']) {
    $user = $_SESSION['user'];
    //var_dump($user);
    // var_dump($user->getCart());
    $cart = $_SESSION['user']->getCart();

    // var_dump(json_encode($cart));
    echo json_encode($cart);
}


if ($_GET['order']) {
    $order_id = $_GET['id'];
    var_dump($order_id);
    $order = $_SESSION['order']->getOrder($order_id);

    var_dump($order);


}
if ($_GET['allOrders']) {

}


?>
