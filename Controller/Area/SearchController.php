<?php
header('Content-Type: application/json; charset=utf-8');
require_once '../../Model/Classes/Area.php';

class SearchController
{
    private $areaModel;

    public function Search($value)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            // Crear una instancia de la clase Area
            $areaModel = new Area();

            // Envia el valor de la sentencia Like por parametros
            $resultado = $areaModel->searchArea($value);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_GET['search_query'] ?? '';
$controller = new SearchController();
$controller->Search($action);
