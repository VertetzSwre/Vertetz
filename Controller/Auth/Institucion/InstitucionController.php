<?php
header('Content-Type: application/json; charset=utf-8');
session_start();
require_once '../../Model/Classes/Institucion.php';

class InstitucionController
{
    private $institucionModel;

    // Método para registrar una institución
    public function CreateInstitucion()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $nombre = $_POST['nombre'];
            $calle = $_POST['calle'];
            $esquina = $_POST['esquina'];
            $puerta = $_POST['puerta'];

            // Crear una instancia de la clase Institucion
            $institucionModel = new Institucion();

            // Intentar registrar la institución
            $resultado = $institucionModel->registrarInstitucion($nombre, $calle, $esquina, $puerta);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para obtener todas las instituciones
    public function LoadInstituciones()
    {
        $resultado = $_SESSION['instituciones'];
        echo json_encode($resultado);
    }

    // Metodo para obtener las instituciones de la session
    public function ReadInstituciones()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {

            // Crear una instancia de la clase Institucion
            $institucionModel = new Institucion();

            // Obtener las instituciones
            // $resultado = $institucionModel->obtenerInstituciones();

            // Devolver los resultados como JSON
            // echo json_encode($resultado);
        }
    }
    // Metodo para obtener una institucion por nombre
    public function ReadInstitucionByName($institucion)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Crear una instancia de la clase Institucion
            $institucionModel = new Institucion();

            // Obtener las instituciones
            $resultado = $institucionModel->getInstitucionByName($institucion);

            // Devolver los resultados como JSON
            echo json_encode($resultado);
        }
    }



    // Método para actualizar una institución
    public function UpdateInstitucion()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $nombre = $_POST['nombre'];
            $calle = $_POST['calle'];
            $esquina = $_POST['esquina'];
            $puerta = $_POST['puerta'];

            // Crear una instancia de la clase Institucion
            $institucionModel = new Institucion();

            // Intentar actualizar la institución
            $resultado = $institucionModel->actualizarInstitucion($nombre, $calle, $esquina, $puerta);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para eliminar una institución
    public function DeleteInstitucion()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener el nombre de la institución del formulario
            $nombre = $_POST['nombre'];

            // Crear una instancia de la clase Institucion
            $institucionModel = new Institucion();

            // Intentar eliminar la institución
            $resultado = $institucionModel->eliminarInstitucion($nombre);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_POST['action'] ?? '';
$controller = new InstitucionController();

if ($action === 'create') {
    $controller->CreateInstitucion();
} elseif ($action === 'read') {
    $controller->ReadInstituciones();
} elseif ($action === 'update') {
    $controller->UpdateInstitucion();
} elseif ($action === 'delete') {
    $controller->DeleteInstitucion();
} elseif ($action === 'instituciones') {
    $controller->LoadInstituciones();
} elseif ($action === 'institucionByName') {
    $argument = $_POST['nombre'] ?? '';
    $controller->ReadInstitucionByName($argument);
}
