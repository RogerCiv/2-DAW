<?php



if (!empty($_GET['newPub'])) {
    include("View/newPubView.phtml");
    die;
}

if (!empty($_POST['newPub'])) {
   PublicacionRepository::newPub($_POST,$_FILES);
}

?>

