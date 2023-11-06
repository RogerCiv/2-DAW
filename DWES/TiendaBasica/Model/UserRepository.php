<?php
class UserRepository
{
    
    public static function register($user, $password) {
        try {
            $bd = Conectar::conexion();
    
            // Verificar si el nombre de usuario ya está en uso
            $existingUser = $bd->query('SELECT * FROM user WHERE name="' . $user . '"');
            if ($existingUser->fetch_assoc()) {
                echo 'El nombre de usuario ya está en uso';
                return;
            }
    
            $hashedPassword = md5($password);
            $sql = 'INSERT INTO user (name, password, rol) VALUES ("' . $user . '", "' . $hashedPassword . '", 1)';
    
            if ($bd->query($sql)) {
                echo 'Usuario registrado con éxito';
                include("View/loginView.phtml");
                exit;
            } else {
                echo 'Error al registrar el usuario.'. mysqli_error($bd);
                include("View/registerView.phtml");
                exit;
            }
        } catch (Exception $e) {
            echo 'Error al registrar el usuario: ' . $e->getMessage();
            include("View/registerView.phtml");
            exit;
        }
    }
    

    public static function validar($u, $p) {
        try {
            $bd = Conectar::conexion();
            $result = $bd->query('SELECT * FROM user WHERE name="' . $u . '"');
    
            if ($datos = $result->fetch_assoc()) {
                if ($datos['password'] == md5($p)) {
                    return new User($datos);
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
    

    public static function logout(){
        session_unset();
        session_destroy();
        //session_start();
    }

    public static function getUserById($id){
        $bd = Conectar::conexion();
        $result = $bd->query('SELECT * FROM user WHERE id="' . $id . '"');

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
        $sql = "SELECT * FROM user";
        $result=$bd->query($sql);

        while ($datos = $result->fetch_assoc()) {
            $users[] = new User($datos);
        }

        return $users;
        
    }

}
?>