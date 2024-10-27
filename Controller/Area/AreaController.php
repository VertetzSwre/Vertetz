<?php
session_start(); // Iniciar la sesión
require_once '../../Model/Classes/Area.php';

class AreaController
{
    private $areaModel;

    public function CreateArea()
    {
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

    // Traer Areas de una institución en particular
    public function ReadArea($institucion)
    {
        $areaModel = new Area();
        $areas = $areaModel->obtenerAreas($institucion);
        echo json_encode($areas);
    }

    public function UpdateArea()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener datos del formulario
            $codigo_area = $_POST['codigo'];
            $institucion = $_POST['institucion'];
            $nombre_area = $_POST['nombre'];
            $estado = $_POST['estado'];

            // Crear una instancia de la clase Area
            $areaModel = new Area();

            // Intentar actualizar el área
            $resultado = $areaModel->updateArea($codigo_area, $institucion, $nombre_area, $estado);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    public function DeleteArea()
    {
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
    // Array de instituciones de la sesión
    $instituciones = $_SESSION['instituciones'];

    // Valor de la institución recibido por POST
    $institucion = $_POST['institucion'];

    // Variable para indicar si se encontró una coincidencia
    $coincidenciaEncontrada = false;

    // Recorrer el array de instituciones para buscar coincidencias
    foreach ($instituciones as $inst) {
        if ($inst == $institucion) {
            $coincidenciaEncontrada = true;
            break; // Salimos del bucle si encontramos coincidencia
        }
    }

    if (!$coincidenciaEncontrada) {
        $institucion = ""; // Si no hay coincidencia, asignamos un valor vacío
    }

    $controller->ReadArea('Antel'/*$institucion*/);
} elseif ($action === 'create') {
    $controller->CreateArea();
} elseif ($action === 'update') {
    $controller->UpdateArea();
} elseif ($action === 'delete') {
    $controller->DeleteArea();
}
?>