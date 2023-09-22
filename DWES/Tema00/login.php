<?php
session_start();
require_once('db.php');
$bd = Conectar::conexion();

// Resto del código...

// Al final, cuando tengas el contenido HTML específico
$content = ob_get_clean();

// Incluye la plantilla
include('template.php');
?>
