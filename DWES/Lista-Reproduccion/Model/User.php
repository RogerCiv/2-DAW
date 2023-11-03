<?php
class User
{
    private $id;
    private $user;
    private $rol;
    private $password;
    private $plfavs;
    private $mypls;

    public function __construct($datos)
    {
        $this->id = $datos['id'];
        $this->user = $datos['user'];
        $this->password = $datos['password'];
        $this->rol = $datos['rol'];
    }
    public function getUserName()
    {
        return $this->user;
    }

    public function getPassword()
    {
        return $this->password;
    }
    public function getId()
    {
        return $this->id;
    }

    public function getRol()
    {
        return $this->rol;
    }

    public function getPlfavs()
    {
        $bd = Conectar::conexion();
        $sql = "SELECT p.*, sp.id AS user_plfav_id
        FROM playlist p
        INNER JOIN user_plfav upf ON p.id = upf.id_pl
        WHERE upf.user_id = " . $this->id;

        $result = $bd->query($sql);
        if (!$result) {
            echo "Error: " . mysqli_error($bd);
        } else {
            echo "Inserción exitosa";
        }
        $playlists = array();
        while($datos=$result->fetch_assoc()){
            $playlists[] = $datos;
          }

        return $playlists;
        
    }
    public function getMypls()
    {
        $bd = Conectar::conexion();
        $sql = "SELECT * FROM playlist WHERE user_id = " . $this->id;
        $result = $bd->query($sql);
        $myPlaylist = array();
        while ($datos = $result->fetch_assoc()) {

            $myPlaylist[] = new Playlist($datos);
        }
        return $myPlaylist;
    }
}
