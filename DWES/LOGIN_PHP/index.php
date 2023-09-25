<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>Indice películas</title>
</head>

<body>
    <header>
        <nav>
            <div class="user__message">
                <?php
                echo "<p>Bienvenido <span>" . $_SESSION['username'] . '</span></p>';
                ?>
            </div>
            <form class="logout" method="POST" action="logout.php">
                <input type="submit" name="logout" value="Salir">
                <?php
                    echo '<input type="submit" name="adminWeb" value="Admin Page">';
                ?>
            </form>
            <form class="addFilm" method="POST" action="">
                <input type="text" name="title" placeholder="Nombre película">
                <input type="number" name="year" placeholder="Año Película">
                <input type="text" name="img" placeholder="Enlace imagen">
                <input type="submit" name="sendFilm" value="Enviar">
            </form>
        </nav>

    </header>

    <main>
        <div class="grid__films">
            <!--
            <div class="film">
                <div class="film__img">
                    <img src="img/kikujiro.webp" alt="Kikujiro Poster">
                </div>
                <div class="film__info">
                    <h2 class="film__title">Kikujiro</h2>
                    <h2 class="film__year">1999</h2>
                </div>
                <input type="submit" name="delete" value="Borrar">
            </div>
            -->
            <?php
            include('movies.php');

            foreach ($movies as $movie) {
                echo '<div class="film">';
                echo '<div class="film__img">';
                echo '<img src="img/' . $movie['poster'] . '" alt="' . $movie['title'] . ' Poster">';
                echo '</div>';
                echo '<div class="film__info">';
                echo '<h2 class="film__title">' . $movie['title'] . '</h2>';
                echo '<h2 class="film__year">' . $movie['year'] . '</h2>';
                echo '</div>';
                echo  '<form method="POST">';
                echo '<input type="hidden" name="borrar" value="' . $movie['id'] . '">';
                echo '<input type="submit" value="borrar">';
                echo '</form>';
                echo '</div>';
            }
            ?>
        </div>
    </main>
</body>

</html>