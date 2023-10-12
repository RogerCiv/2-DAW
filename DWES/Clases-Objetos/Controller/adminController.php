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

if(!empty($_GET['editPubView'])){
  $pub = PublicacionRepository::getPubById($_GET['editPubView']);
  include("View/editPubView.phtml");
  die;

}
