<!-- voteController -->
<?php
if (!empty($_POST['Vote'])) {
    $idGame = $_POST['idGame'];
    GameRepository::voteGame($idGame);
}
?>
