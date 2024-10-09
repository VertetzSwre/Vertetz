<?php
require_once '../../Model/Classes/DatosDeContacto.php';

class DatosDeContactoController
{
    private $datosDeContactoModel;

    // Método para registrar datos de contacto
    public function CreateDatosDeContacto()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            
            // Obtener los datos del formulario
            $nombre_institucion = $_POST['nombre_institucion'];
            $email = $_POST['email'];
            $telefono = $_POST['telefono'];
            
            // Crear una instancia de la clase DatosDeContacto
            $datosDeContactoModel = new DatosDeContacto();
            
            // Intentar registrar los datos de contacto
            $resultado = $datosDeContactoModel->registrarDatosDeContacto($nombre_institucion, $email, $telefono);
            
            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para obtener todos los datos de contacto
    public function ReadDatosDeContacto()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {

            // Crear una instancia de la clase DatosDeContacto
            $datosDeContactoModel = new DatosDeContacto();
            
            // Obtener los datos de contacto
            $resultado = $datosDeContactoModel->obtenerDatosDeContacto($_GET['nombre_institucion']);
            
            // Devolver los resultados como JSON
            echo json_encode($resultado);
        }
    }

    // Método para actualizar datos de contacto
    public function UpdateDatosDeContacto()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            
            // Obtener los datos del formulario
            $nombre_institucion = $_POST['nombre_institucion'];
            $email = $_POST['email'];
            $telefono = $_POST['telefono'];
            
            // Crear una instancia de la clase DatosDeContacto
            $datosDeContactoModel = new DatosDeContacto();
            
            // Intentar actualizar los datos de contacto
            $resultado = $datosDeContactoModel->actualizarDatosDeContacto($nombre_institucion, $email, $telefono);
            
            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para eliminar datos de contacto
    public function DeleteDatosDeContacto()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            
            // Obtener el nombre de la institución del formulario
            $nombre_institucion = $_POST['nombre_institucion'];
            
            // Crear una instancia de la clase DatosDeContacto
            $datosDeContactoModel = new DatosDeContacto();
            
            // Intentar eliminar los datos de contacto
            $resultado = $datosDeContactoModel->eliminarDatosDeContacto($nombre_institucion);
            
            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_POST['action'] ?? '';
$controller = new DatosDeContactoController();

if ($action === 'create') {
    $controller->CreateDatosDeContacto();
} elseif ($action === 'read') {
    $controller->ReadDatosDeContacto();
} elseif ($action === 'update') {
    $controller->UpdateDatosDeContacto();
} elseif ($action === 'delete') {
    $controller->DeleteDatosDeContacto();
}
?>
