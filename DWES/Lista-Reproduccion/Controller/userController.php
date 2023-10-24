<?php



if (!empty($_POST['login'])) {
    // Validación y configuración de la sesión aquí
    $_SESSION['user'] = UserRepository::validar($_POST['usuario'], $_POST['password']);
    
    if ($_SESSION['user']) {
        // Redirigir al usuario de vuelta a la página principal (mainView) o a donde quieras que vaya después del inicio de sesión
        header("Location: index.php");
        exit;
    }
}

if (!empty($_POST['logout'])) {
    // Manejo del cierre de sesión
    UserRepository::logout();

    // Redirigir al usuario de vuelta a la página principal (mainView) o a donde quieras que vaya después del cierre de sesión
    header("Location: index.php");
    exit;
}

if (!empty($_POST['register'])) {
    UserRepository::register($_POST['usuario'], $_POST['password']);
    // Redirigir al usuario de vuelta a la página principal (mainView) o a donde quieras que vaya después del registro
    header("Location: index.php");
    exit;
}

?>

