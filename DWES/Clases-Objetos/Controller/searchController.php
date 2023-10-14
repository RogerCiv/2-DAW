<?php


if(!empty($_POST['searchButton'])){
    $search = $_POST['search'];
    $searchTerm = isset($_GET['search']) ? $_GET['search'] : '';
    $sortBy = isset($_GET['sort']) ? $_GET['sort'] : 'title'; // Ordenar por título de forma predeterminada

    $pubs[] = '';
   $pubs = PublicacionRepository::searchPubs($search,$sortBy);

    include("View/mainView.phtml");
    die;
}


?>