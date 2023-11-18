<?php

class UsersRepository{
    public static function validar($u, $p) {
        try {
            $bd = Conectar::conexion();
            $result = $bd->query('SELECT * FROM users WHERE username="' . $u . '"');
            //var_dump($result);
            if ($datos = $result->fetch_assoc()) {
                if ($datos['password'] == md5($p)) {
                    return new Users($datos);
                }
            } else {
                echo 'Credenciales no válidas';
            }
            return null;
        } catch (Exception $e) {
            // Manejo de excepciones
            // Puedes personalizar el manejo de errores aquí
            echo 'Error al validar credenciales: ' . $e->getMessage();
            return null;
        }
    }

    public static function getUsers(){
        $bd = Conectar::conexion();
        $sql = "SELECT * FROM users";
        $result=$bd->query($sql);

        while ($datos = $result->fetch_assoc()) {
            $users[] = new Users($datos);
        }

        return $users;
        
    }
    public static function updateUserRole($userId, $newRole)
    {
        $bd = Conectar::conexion();
        
        // Realiza la actualización del rol en la base de datos
        $sql = "UPDATE users SET rol = '$newRole' WHERE id = $userId";
        $result=$bd->query($sql);
    }
}




?>