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

    public static function getProductById($productID){
        $bd = Conectar::conexion();
        //echo 'La id es: '.$productID;
        $sql = "SELECT * FROM product WHERE id = $productID";
        //echo $sql;
        $result= $bd->query($sql);

        if($datos=$result->fetch_assoc()){
            return new Product($datos);
        }
        /*
        if($result->num_rows>0){
            $productData = $result->fetch_assoc();
            return new Product($productData);
        }
        */
        return null;


    }
    public static function updateStock($productID, $newStock)
    {
        try {
            $bd = Conectar::conexion();

            $sql = "UPDATE product SET stock = $newStock WHERE id = $productID";

            $result = $bd->query($sql);

            if (!$result) {
                echo "Error al actualizar el stock: " . $bd->error;
                exit;
            }
        } catch (Exception $e) {
            echo 'Error al actualizar el stock: ' . $e->getMessage();
            exit;
        }
    }
    public static function getProductNameById($productId)
    {
        try {
            $bd = Conectar::conexion();
            $sql = "SELECT * FROM product WHERE id = $productId";
            $result = $bd->query($sql);

            if ($result->num_rows > 0) {
                $productData = $result->fetch_assoc();
               // return $productData['name'];
               return $productData;
            }

            return null;
        } catch (Exception $e) {
            echo 'Error al obtener el nombre del producto: ' . $e->getMessage();
            exit;
        }
    }
}
