<?php


if(!empty($_POST['searchButton'])){
    $search = $_POST['search'];
    $pubs[] = '';
   $pubs = PublicacionRepository::searchPubs($search);

    include("View/mainView.phtml");
    die;
}


?>