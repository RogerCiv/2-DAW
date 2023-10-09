<?php

    class CommentRepository{
        /*
        public static function newComment($datos){
            $bd= Conectar::conexion();
            //user_id -> $_SESSION['user']->getId() ??????
            $publication_id = $_SESSION['pub'];
            $sql = "INSERT INTO comments VALUES (NULL,'" . $_SESSION['user']->getId() . "','" . $publication_id . "','".$datos['comment']."',NOW())";
            //var_dump($sql);
            $bd->query($sql);
            return $bd->insert_id;
        }
        */
        public static function getCommentsByPubId($id){
            $bd = Conectar::conexion();
            $result = $bd->query('SELECT * FROM comments WHERE id_pub="' . $id . '"');

            $comments = array();

            while ($datos = $result->fetch_assoc()) {
                $comments[]= new Comment($datos);
            }
            return $comments;
        }

        public static function newComment($datos) {
            $bd= Conectar::conexion();
            //var_dump($datos);
            $sql= "INSERT INTO comments VALUES (NULL,".$_SESSION['user']->getId().",".$datos['id_pub'].",'".$datos['comment']."', now())";
            //echo  $sql;

            $result=$bd->query($sql);


        }
    
    }
