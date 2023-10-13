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

?>

