<?php
class UserRepository
{
    
    public static function register($user,$password){
        $bd = Conectar::conexion();
    
        // Verificar si el nombre de usuario ya existe
        $existingUser = $bd->query('SELECT * FROM users WHERE name="' . $user . '"');
        if ($existingUser->fetch_assoc()) {
            echo 'El nombre de usuario ya está en uso';
            return;
        }
        
        // Si el nombre de usuario no existe, proceder con el registro
        $hashedPassword = md5($password); // Hash de la contraseña (debes considerar usar una función más segura)
        $sql = 'INSERT INTO users (name, password) VALUES ("' . $user . '", "' . $hashedPassword . '")';
        echo $sql;
        
        if ($bd->query($sql)) {
            echo 'Usuario registrado con éxito';
        } else {
            echo 'Error al registrar el usuario';
        }
    }

    public static function validar($u, $p)
    {
        $bd = Conectar::conexion();
        $result = $bd->query('SELECT * FROM users WHERE name="' . $u . '"');

        if ($datos = $result->fetch_assoc()) {
            if ($datos['password'] == md5($p)) {
                return new User($datos);
            }
            
        }else{
            echo 'Credenciales no válidas';
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