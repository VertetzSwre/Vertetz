<?php
header('Content-Type: application/json; charset=utf-8');
require_once '../../Model/Classes/Reserva.php';

class SearchController
{
    private $reservaModel;

    public function Search($value)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            // Crear una instancia de la clase Area
            $reservaModel = new Reserva();

            // Intentar registrar al nuevo usuario
            $resultado = $reservaModel->searchReserva($value);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_GET['search_query'] ?? '';
$controller = new SearchController();
$controller->Search($action);
