<?php

if (!empty($_SESSION['user'])) {
    $userId = $_SESSION['user']->getId();
    $tickets = TicketsRepository::getAllTicketsById($userId);
    $ticketsWhitResponse = TicketsRepository::getAllTicketsByIdWhitResponse($userId);

    
    if (!empty($_POST['sendTicket'])) {
        $title = $_POST['title'];
        $text = $_POST['text'];
        $userId = $_POST['idUser'];
        TicketsRepository::insertTickets($title, $text, $userId);
        $tickets = TicketsRepository::getAllTicketsById($userId);
        include("View/clientView.phtml");
        //header('Location: index.php');
        die;
    }

    if (!empty($_POST["updateTicket"])) {
        $text = $_POST['text'];
        $idTicket = $_POST['idTicket'];
        TicketsRepository::updateTickets($idTicket, $text);
        include('View/clientView.phtml');
        die;
    }



    if (!empty($_GET['clientView'])) {
        $userId = $_GET['userId'];
        $tickets = TicketsRepository::getAllTicketsById($userId);
       $ticketsWhitResponse = TicketsRepository::getAllTicketsByIdWhitResponse($userId);
        include("View/clientView.phtml");
        exit;
    }
}
