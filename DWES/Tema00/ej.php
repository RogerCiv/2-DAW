<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <title>Document</title>
  
</head>
<body>
    <div class="botones" >
    <a href="?control=info"><button>Informacion</button></a> 
    <a href="?control=gallery"> <button>Galeria</button></a>
    <a href="?control=mas"><button>Mas info</button></a>
</div>
    <?php
    if(!empty($_GET['control'])) {
        if($_GET['control']=="info"){
          echo '<p>Informacion primer boton </p>';
        }elseif($_GET['control']=="gallery") {
            echo '<img src="imagen.jpg" width="100px"/>';
        }elseif($_GET['control']=="mas"){
            echo '<p>Mas info</p>';
            echo '<form method="POST">';
            echo '<input type="number" name="numero"></input>';
            echo '<input type="submit" name="submit" value="Calcular tabla">';
            echo '<input type="submit" name="sumar" value="Sumar">';
            echo '</form>';
            if(!empty($_POST['numero'])){ 
                $numero = $_POST['numero'];
                echo "<b>El numero es: ".$numero."</b>"; 
                if(isset($_POST['submit'])){
                    for($i = 1;$i<=10;$i++){
                    echo '<p>'.$numero .' X '.$i.' = '.$i*$numero.' </p>';
                    }
                }elseif (isset($_POST['sumar'])) {
                    echo '<br>Sumar '.$numero;
                }
            } 
           
            
        }
    }

    ?>
      
</body>
</html>