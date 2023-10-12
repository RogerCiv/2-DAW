<?php



if (!empty($_GET['newPub'])) {
    include("View/newPubView.phtml");
    die;
}

if (!empty($_POST['newPub'])) {
   PublicacionRepository::newPub($_POST,$_FILES);
}


if (!empty($_POST['editPub']) && !empty($_POST['editPubId'])) {
    // Obtén los datos editados del formulario y el ID de la publicación
    $editPubId = $_POST['editPubId'];
    $editedTitle = $_POST['title'];
    $editedText = $_POST['text'];
    $editedImage = $_FILES['img'];

    // Actualiza la publicación en la base de datos con los datos editados
    PublicacionRepository::updatePub($editPubId, $editedTitle, $editedText, $editedImage);

    // Redirige a alguna página de confirmación o a donde desees
    header("Location: index.php");
    exit;
}

?>

