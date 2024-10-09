<?php
require_once '../../Model/Classes/Tiene.php';

class TieneController
{
    private $tieneModel;

    // Método para registrar un nuevo "tiene"
    public function CreateTiene()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $id_servicio = $_POST['id_servicio'];
            $cantidad = $_POST['cantidad'];

            // Crear una instancia de la clase Tiene
            $tieneModel = new Tiene();

            // Intentar registrar el nuevo "tiene"
            $resultado = $tieneModel->registrarTiene($id_servicio, $cantidad);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para obtener todos los registros de "tiene"
    public function ReadTiene()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {

            // Crear una instancia de la clase Tiene
            $tieneModel = new Tiene();

            // Obtener todos los registros
            $resultado = $tieneModel->obtenerTiene();

            // Devolver los resultados como JSON
            echo json_encode($resultado);
        }
    }

    // Método para actualizar un registro de "tiene"
    public function UpdateTiene()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $id_servicio = $_POST['id_servicio'];
            $cantidad = $_POST['cantidad'];

            // Crear una instancia de la clase Tiene
            $tieneModel = new Tiene();

            // Intentar actualizar el registro
            $resultado = $tieneModel->actualizarTiene($id_servicio, $cantidad);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para eliminar un registro de "tiene"
    public function DeleteTiene()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener el id_servicio del formulario
            $id_servicio = $_POST['id_servicio'];

            // Crear una instancia de la clase Tiene
            $tieneModel = new Tiene();

            // Intentar eliminar el registro
            $resultado = $tieneModel->eliminarTiene($id_servicio);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción solicitada
$action = $_POST['action'] ?? '';
$controller = new TieneController();

if ($action === 'create') {
    $controller->CreateTiene();
} elseif ($action === 'read') {
    $controller->ReadTiene();
} elseif ($action === 'update') {
    $controller->UpdateTiene();
} elseif ($action === 'delete') {
    $controller->DeleteTiene();
}
?>
