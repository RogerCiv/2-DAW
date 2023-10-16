<?php



if (!empty($_GET['newPub'])) {
    include("View/newPubView.phtml");
    die;
}

if (!empty($_POST['newPub'])) {
   PublicacionRepository::newPub($_POST,$_FILES);
}


if (!empty($_POST['editPub']) && !empty($_POST['editPubId'])) {
    $editPubId = $_POST['editPubId'];
    $editedTitle = $_POST['title'];
    $editedText = $_POST['text'];
    $editedImage = $_FILES['img'];

    PublicacionRepository::updatePub($editPubId, $editedTitle, $editedText, $editedImage);
 
}
if(empty($_GET['page'])){

    $page = isset($_GET['page']) ? intval($_GET['page']) : 1;
    $perPage = 5;
    $offset = ($page - 1) * $perPage;
    $pubs = PublicacionRepository::getPublicacionesPaged($offset, $perPage);
    $totalPubs = PublicacionRepository::getTotalPublications(); 
}

?>

