<?php
require_once '../modelo/Area.php';

header('Content-Type: application/json'); // Establece el tipo de contenido a JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Obtener datos del formulario
    $codigo_area = $_POST['codigo'];
    $institucion = $_POST['isntitucion'];
    $nombre_area = $_POST['nombre'];
    $estado = $_POST['estado'];   
    
    // Crear una instancia de la clase Area
    $areaModel = new Area();
    
    // Intentar registrar al nuevo usuario
    $resultado = $areaModel->registrarArea($codigo_area, $institucion, $nombre_area, $estado);
    
    // Devolver el resultado como JSON
    echo json_encode($resultado);
}
?>
