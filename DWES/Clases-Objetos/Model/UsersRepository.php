<?php
class UserRepository
{
    public static function validar($u, $p)
    {
        $bd = Conectar::conexion();
        $result = $bd->query('SELECT * FROM users WHERE user="' . $u . '"');

        if ($datos = $result->fetch_assoc()) {
            if ($datos['password'] == md5($p)) {
                return new User($datos);
            }
        }
        return null;
    }
}
?>