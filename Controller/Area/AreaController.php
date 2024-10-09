<?php
require_once '../../Model/Classes/Area.php';

class AreaController
{
    private $areaModel;

    public function CreateArea(){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener datos del formulario
            $codigo_area = $_POST['codigo'];
            $institucion = $_POST['institucion'];
            $nombre_area = $_POST['nombre'];
            $estado = $_POST['estado'];   
            
            // Crear una instancia de la clase Area
            $areaModel = new Area();
            
            // Intentar registrar al nuevo usuario
            $resultado = $areaModel->registrarArea($codigo_area, $institucion, $nombre_area, $estado);
            
            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    public function ReadArea(){
        $areaModel = new Area();
        $areas = $areaModel->obtenerAreas();
        echo json_encode($areas);
    }

    public function UpdateArea(){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener datos del formulario
            $codigo_area = $_POST['codigo'];
            $institucion = $_POST['institucion'];
            $nombre_area = $_POST['nombre'];
            $tipo = $_POST['tipo'];
            $estado = $_POST['estado'];
            
            // Crear una instancia de la clase Area
            $areaModel = new Area();
            
            // Intentar actualizar el área
            $resultado = $areaModel->updateArea($codigo_area, $institucion, $nombre_area, $tipo, $estado);
            
            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    public function DeleteArea(){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            
            // Obtener el código del área a eliminar
            $codigo_area = $_POST['codigo'];

            // Crear una instancia de la clase Area
            $areaModel = new Area();
            
            // Intentar eliminar el área
            $resultado = $areaModel->deleteArea($codigo_area);
            
            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_POST['action'] ?? '';
$controller = new AreaController();

if ($action === 'read') {
    $controller->ReadArea();
} elseif ($action === 'create') {
    $controller->CreateArea();
} elseif ($action === 'update') {
    $controller->UpdateArea();
} elseif ($action === 'delete') {
    $controller->DeleteArea();
}
?>
