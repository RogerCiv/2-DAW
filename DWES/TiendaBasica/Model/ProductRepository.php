<?php

class ProductRepository
{
    public static function addProduct($datos, $file)
    {
        try {
            $bd = Conectar::conexion();

            $image = $file['img']['name'];
            move_uploaded_file($file['img']['tmp_name'], 'public/img/' . $image);
            $sql = "INSERT INTO product (id,description,name,img,price,stock) VALUES (null,'" . $datos['description'] . "','" . $datos['name'] . "','" . $image . "','" . $datos['price'] . "','" . $datos['stock'] . "')";

            // echo $sql;

            $result = $bd->query($sql);

            if (!$result) {
                echo "Error en la consulta: " . $bd->error;
                include("View/addProduct.phtml");
                die;
            } else {
                echo "Inserción exitosa.";
                include("View/addProduct.phtml");
                die;
            }
        } catch (Exception $e) {
            echo 'Error al registrar el producto: ' . $e->getMessage();
            include("View/addProduct.phtml");
            exit;
        }
    }

    public static function getAllProducts(){
        $bd= Conectar::conexion();

        $sql = "SELECT * FROM product";

        $result = $bd->query($sql);

        $products = array();
        while($datos=$result->fetch_assoc()){
            $products[] = new Product($datos);
        }

        return $products;
    }
}
