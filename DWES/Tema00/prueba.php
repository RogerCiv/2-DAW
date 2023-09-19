<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <a href="prueba.php?control=1">Informacion</a> 
    - 
    <a href="?control=0"> Galeria</a>
    <a href="">Mas info</a>
    <?php
    //Arrays
        $image[]="1.jpg";
        $image[]="2.jpg"
    ?>

    <?php
    //http://localhost/EntornoCliente/prueba.php?&control=1
    if(!empty($_GET['control'])) {
        if($_GET['control']==1){
          echo '<img src="'.$image[0].'" width="100px"/>';
        }else {
            echo 'No hay imagen';
        }
    }
    ?>    
    <ul>
        
    <?php
    for($i = 0; $i<sizeof($image); $i++){
        echo '<img src="'.$image[$i].'" width="100px"/>';
    }
    ?>
    </ul>
</body>
</html>