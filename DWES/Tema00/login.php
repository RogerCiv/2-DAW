<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./pelicula.css">
    <title>Peliculas</title>
</head>
<body>
<header> 
<form method="POST" action="">
    <?php
    include('db.php');
    include('controlador.php');
    ?>
        <input type="text" name="name" id="" placeholder="Usuario">
        <input type="password" name="password" placeholder="password">
        <input type="submit" name="login" value="Login">
    </form>
<form method="GET">
    <input type="submit" name="logout" value="logout">
</form>

</body>
</html>
