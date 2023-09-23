<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./pelicula.css">
    <title>Peliculas</title>
</head>
<body>
    <header>
        <!-- Aquí puedes colocar elementos de encabezado comunes, como el formulario de inicio de sesión -->
        <?= isset($headerContent) ? $headerContent : '' ?>
        
        <!-- Formulario de inicio de sesión -->
        <form method="POST" action="">
            <input type="text" name="name" id="" placeholder="Usuario">
            <input type="password" name="password" placeholder="password">
            <input type="submit" name="login" value="Login">
        </form>
        
    </header>
    <main>
        <!-- Aquí puedes colocar el contenido específico de la página -->
        <?= isset($mainContent) ? $mainContent : '' ?>
    </main>
</body>
</html>
