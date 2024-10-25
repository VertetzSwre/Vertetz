<?php
require_once '../../Model/Classes/Servicio.php';

class ServicioController
{
    private $servicioModel;

    // Método para registrar un servicio
    public function CreateServicio()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $id_servicio = $_POST['id_servicio'];
            $tipo_servicio = $_POST['tipo_servicio'];
            $descripcion = $_POST['descripcion'] ?? null;

            // Crear una instancia de la clase Servicio
            $servicioModel = new Servicio();

            // Intentar registrar el servicio
            $resultado = $servicioModel->registrarServicio($id_servicio, $tipo_servicio, $descripcion);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para obtener todos los servicios
    public function ReadServicios()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Crear una instancia de la clase Servicio
            $servicioModel = new Servicio();

            // Obtener los servicios
            $resultado = $servicioModel->obtenerServicios();

            // Devolver los resultados como JSON
            echo json_encode($resultado);
        }
    }

    // Método para actualizar un servicio
    public function UpdateServicio()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $id_servicio = $_POST['id_servicio'];
            $tipo_servicio = $_POST['tipo_servicio'];
            $descripcion = $_POST['descripcion'];

            // Crear una instancia de la clase Servicio
            $servicioModel = new Servicio();

            // Intentar actualizar el servicio
            $resultado = $servicioModel->actualizarServicio($id_servicio, $tipo_servicio, $descripcion);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para eliminar un servicio
    public function DeleteServicio()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener el ID del servicio del formulario
            $id_servicio = $_POST['id_servicio'];

            // Crear una instancia de la clase Servicio
            $servicioModel = new Servicio();

            // Intentar eliminar el servicio
            $resultado = $servicioModel->eliminarServicio($id_servicio);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_POST['action'] ?? '';
$controller = new ServicioController();

if ($action === 'create') {
    $controller->CreateServicio();
} elseif ($action === 'read') {
    $controller->ReadServicios();
} elseif ($action === 'update') {
    $controller->UpdateServicio();
} elseif ($action === 'delete') {
    $controller->DeleteServicio();
}
?>
