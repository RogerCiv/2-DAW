<?php
class UserRepository
{
    
    public static function register($user,$password){
        $bd = Conectar::conexion();
    
        $existingUser = $bd->query('SELECT * FROM users WHERE user="' . $user . '"');
        if ($existingUser->fetch_assoc()) {
            echo 'El nombre de usuario ya está en uso';
            return;
        }

        $hashedPassword = md5($password); 
        $sql = 'INSERT INTO users (user, password,rol) VALUES ("' . $user . '", "' . $hashedPassword . '",0)';
        //echo $sql;
        
        if ($bd->query($sql)) {
            echo 'Usuario registrado con éxito';
            include("View/loginView.phtml");
            exit;
        } else {
            echo 'Error al registrar el usuario';
            include("View/registerView.phtml");
            exit;
        }
    }

    public static function validar($u, $p)
    {
        $bd = Conectar::conexion();
        $result = $bd->query('SELECT * FROM users WHERE user="' . $u . '"');

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