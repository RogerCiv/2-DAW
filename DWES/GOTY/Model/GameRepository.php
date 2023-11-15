
<?php
class GameRepository
{
    public static function getAllGames()
    {
        $bd = Conectar::conexion();
        $sql = "SELECT * FROM game";

        $result = $bd->query($sql);
        $games = array();
        while ($datos = $result->fetch_assoc()) {
            $games[] = new Game($datos);
        }
        return $games;
    }

    public static function voteGame($idGame)
    {
        $bd = Conectar::conexion();
        $sql = "UPDATE game SET votes = votes + 1 WHERE id = $idGame"; // Cambiado de 'idJuego' a 'id'
        $bd->query($sql);
    }
}
?>
