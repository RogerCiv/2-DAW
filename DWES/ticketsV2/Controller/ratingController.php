<?php

if(!empty($_SESSION['user'])){
    $userId = $_SESSION['user']->getId();

    $ticketsClosed = TicketsRepository::getAllTicketsClosed($userId);

    if(!empty($_POST['sendRating'])){
        $valoracion = $_POST['valoracion'];
        $idTicket = $_POST['idTicket'];
       // var_dump($idTicket);
        RatingsRepository::insertRating($userId, $valoracion,$idTicket);
        header('Location: index.php');
        die();
    }
    
}

?>