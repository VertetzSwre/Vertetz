<?php
header('Content-Type: application/json; charset=utf-8');
require_once '../../Model/Classes/Institucion.php';

class SearchController
{
    private $institucionModel;

    public function Search($value)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            // Crear una instancia de la clase Area
            $institucionModel = new Institucion();

            // Intentar registrar al nuevo usuario
            $resultado = $institucionModel->searchInstitucion($value);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_GET['search_query'] ?? '';
$controller = new SearchController();
$controller->Search($action);
