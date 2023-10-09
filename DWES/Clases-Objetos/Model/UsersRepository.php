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

    public static function logout(){
        session_unset();
        session_destroy();
        //session_start();
    }

    public static function getUserById($id){
        $bd = Conectar::conexion();
        $result = $bd->query('SELECT * FROM users WHERE id="' . $id . '"');

        if ($datos = $result->fetch_assoc()) {
            return new User($datos);
        }
    }

    public static function updateUserRole($userId, $newRole)
    {
        $bd = Conectar::conexion();
        
        // Realiza la actualización del rol en la base de datos
        $sql = "UPDATE users SET rol = '$newRole' WHERE id = $userId";
        $result=$bd->query($sql);
    }

    public static function getUsers(){
        $bd = Conectar::conexion();
        $sql = "SELECT * FROM users";
        $result=$bd->query($sql);

        while ($datos = $result->fetch_assoc()) {
            $users[] = new User($datos);
        }

        return $users;
        
    }
}
?>