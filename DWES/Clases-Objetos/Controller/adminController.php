<?php


if (!empty($_GET['adminView'])) {
    $users = UserRepository::getUsers();
    include("View/adminView.phtml");
    die;
}
/*
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
*/

if (!empty($_POST['changeRole'])) {
    $userId = $_POST['userId'];
    $newRole = ($_POST['newRole']); // Convierte el valor a entero

    // Realiza la actualización del rol en la base de datos
    UserRepository::updateUserRole($userId, $newRole);

    // Verificar si hubo errores en la consulta
    if ($result === false) {
        echo "Error en la consulta SQL: " . $bd->error;
    } else {
        echo "El rol ha sido actualizado con éxito.";
    }
}



?>