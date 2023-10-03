<?php

class UsersRepository{
    public static function getUsers(){
        $bd=Conectar::conexion();
        $sql = "SELECT * FROM users ";
        $result=$bd->query($sql);

        if (!$result) {
            die("Error en la consulta: " . $bd->error);
        }

        //COnstruir con el modelo un array de publicaciones
        while($datos=$result->fetch_assoc()){
            $users[]= new User($datos);
        }

        return $users;
    }

    public static function validarCredenciales($user,$password){
        $bd=Conectar::conexion();
        $sql = "SELECT * FROM users WHERE user ='$user' AND password = '$password' ";
        $result=$bd->query($sql);
        
        if($datos=$result->fetch_assoc()){
            return new User($datos);
        }else{
            return null;
        }

    }

 
}

?>