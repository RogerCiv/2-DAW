<?php
if (!empty($_GET['adminView'])) {
    $users = UserRepository::getUsers();
    $pubs = PublicacionRepository::getPublicaciones();
    include("View/adminView.phtml");
    die;
}

if (isset($_POST['changeRole'])) {
    $userId = $_POST['userId'];
    $newRole = intval($_POST['newRole']); // Convierte el valor a entero

    // Realiza la actualización del rol en la base de datos
    UserRepository::updateUserRole($userId, $newRole);

    // Mostrar un mensaje de éxito
    echo "El rol ha sido actualizado con éxito.";
} else {
    // Redirige a la página deseada después de procesar el formulario.
    header("Location: index.php?c=admin");
    exit;
}

if (!empty($_GET['editPub'])) {
    $editPubId = $_GET['editPub'];
    $pubToEdit = PublicacionRepository::getPubById($editPubId);
    
    // Aquí puedes cargar la vista editPubView.phtml y pasar $pubToEdit a la vista
    include("View/editPubView.phtml");
   die;
}

