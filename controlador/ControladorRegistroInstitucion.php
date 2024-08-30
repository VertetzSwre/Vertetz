<?php
require_once '../modelo/Institucion.php';

header('Content-Type: application/json'); // Establece el tipo de contenido a JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Obtener datos del formulario
    $nombre = $_POST['nombre'];
    $calle = $_POST['calle'];
    $esquina = $_POST['esquina'];
    $puerta = $_POST['puerta'];   

    
    // Crear una instancia de la clase Usuario
    $institucionModel = new Institucion();
    
    // Intentar registrar al nuevo usuario
    $resultado = $institucionModel->registrarInstitucion($nombre, $calle, $esquina, $puerta);
    
    // Devolver el resultado como JSON
    echo json_encode($resultado);
}
?>
