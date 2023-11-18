<?php

if(!empty($_SESSION['user'])){
    $userId = $_SESSION['user']->getId();
   
    //var_dump($ticketsClosed);
    $tickets = TicketsRepository::getAllTickets();
    
if(!empty($_POST['respondido'])){
    $textoRespuesta = $_POST['respuesta'];
    $idTrabajador = $_POST['idTrabajadorResponde'];
    $idTicket = $_POST['idTicket'];
    $tickets = TicketsRepository::getAllTickets();
    $ticketsWhitT = TicketsRepository::getAllTicketsWhitT($idTrabajador);
    TicketsRepository::updateTicketIdTrabajador($idTrabajador,$idTicket);
    ResponseRepository::setRespuesta($textoRespuesta,$idTrabajador,$idTicket);
    include("View/trabajadorView.phtml");
    die;
}

if(!empty($_GET["trabajadorView"])) {
    $idTrabajador = $_GET['idTrabajador'];
    $tickets = TicketsRepository::getAllTickets();
    $ticketsWhitT = TicketsRepository::getAllTicketsWhitT($idTrabajador);
    include("View/trabajadorView.phtml");
    die;
}

if(!empty($_POST['cerrar'])){
    $idTicket = $_POST['idTicket'];
    $idTrabajador = $_POST['idTrabajadorResponde'];
    $ticketsWhitT = TicketsRepository::getAllTicketsWhitT($idTrabajador);
    $tickets = TicketsRepository::getAllTickets();
    TicketsRepository::cerrarTicket($idTicket);
    include("View/trabajadorView.phtml");
    die;
}


}


?>