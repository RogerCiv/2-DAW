<?php
if (!empty($_GET['adminView'])) {
    $users = UserRepository::getUsers();
    //$pubs = PublicacionRepository::getPublicaciones();
    include("View/adminView.phtml");
    die;
}

if (isset($_POST['changeRole'])) {
    $userId = $_POST['userId'];
    $newRole = $_POST['newRole']; 

    UserRepository::updateUserRole($userId, $newRole);

/*
    include("View/adminView.phtml");
    die;
*/
    //echo "El rol ha sido actualizado con éxito.";
} 
if (!empty($_GET['editPubView'])) {
    $editPubId = $_GET['editPubView'];
    $pubToEdit = PublicacionRepository::getPubById($editPubId);
    
    include("View/editPubView.phtml");
    die;
}


header("Location: index.php");
exit;

?>

