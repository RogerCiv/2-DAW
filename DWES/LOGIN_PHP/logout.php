<?php
session_start();

// Eliminar todas las variables de sesión
session_unset();

// Destruir la sesión
session_destroy();

// Redirigir al usuario a la página de inicio de sesión (u otra página deseada)
header('Location: login.php');
exit();
?>
