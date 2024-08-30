<?php
require_once '../modelo/Servicio.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener datos del formulario
    $id_servicio = $_POST['id_servicio'];
    $tipo_servicio = $_POST['nombre_servicio'];
    $descripcion = $_POST['descripcion'];

    // Crear una instancia del modelo Servicio
    $servicioModel = new Servicio();

    // Intentar registrar un nuevo servicio
    $resultado = $servicioModel->registrarServicio($id_servicio, $tipo_servicio, $descripcion);

    // Devolver el resultado como JSON
    echo json_encode($resultado);
}
?>