<?php
header('Content-Type: application/json; charset=utf-8');
require_once '../../Model/Classes/Servicio.php';

class SearchController
{
    private $servicioModel;

    public function Search($value)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            // Crear una instancia de la clase Area
            $servicioModel = new Servicio();

            // Intentar registrar al nuevo usuario
            $resultado = $servicioModel->searchServicio($value);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_GET['search_query'] ?? '';
$controller = new SearchController();
$controller->Search($action);
