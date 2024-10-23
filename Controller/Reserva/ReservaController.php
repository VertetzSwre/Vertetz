<?php
header('Content-Type: application/json; charset=utf-8');
session_start();
require_once '../../Model/Classes/Reserva.php';

class ReservaController
{
    private $reservaModel;

    // Método para registrar una reserva
    public function CreateReserva()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $id = $_POST['id'];
            $estado = $_POST['estado'];
            $fecha = $_POST['fecha'];
            $hora_inicio = $_POST['hora_inicio'];
            $hora_fin = $_POST['hora_fin'];
            $observaciones = $_POST['observaciones'];
            $nombre_institucion = $_POST['nombre_institucion'] ?? null;
            $codigo_area = $_POST['codigo_area'] ?? null;

            // Crear una instancia de la clase Reserva
            $reservaModel = new Reserva();

            // Intentar registrar la reserva
            $resultado = $reservaModel->registrarReserva($id, $estado, $fecha, $hora_inicio, $hora_fin, $observaciones, $nombre_institucion, $codigo_area);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para obtener todas las reservas
    public function ReadReservas()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Crear una instancia de la clase Reserva
            $reservaModel = new Reserva();

            // Obtener las reservas
            $resultado = $reservaModel->obtenerReservas ();

            // Devolver los resultados como JSON
            echo json_encode($resultado);
        }
    }

    // Método para obtener todas las reservas por fecha 
    public function ReadReservasByDate()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Crear una instancia de la clase Reserva
            $reservaModel = new Reserva();

            // Obtener las reservas
            $resultado = $reservaModel->obtenerReservasPorFecha ();

            // Devolver los resultados como JSON
            echo json_encode($resultado);
        }
    }

    // Método para obtener todas las reservas por fecha 
    public function ReadReservasByUsuario($usuario)
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Crear una instancia de la clase Reserva
            $reservaModel = new Reserva();

            // Obtener las reservas
            $resultado = $reservaModel->obtenerReservasPorUsuario ($usuario);

            // Devolver los resultados como JSON
            echo json_encode($resultado);
        }
    }

    // Método para actualizar una reserva
    public function UpdateReserva()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener los datos del formulario
            $id = $_POST['id'];
            $estado = $_POST['estado'];
            $fecha = $_POST['fecha'];
            $hora_inicio = $_POST['hora_inicio'];
            $hora_fin = $_POST['hora_fin'];
            $observaciones = $_POST['observaciones'];

            // Crear una instancia de la clase Reserva
            $reservaModel = new Reserva();

            // Intentar actualizar la reserva
            $resultado = $reservaModel->actualizarReserva($id, $estado, $fecha, $hora_inicio, $hora_fin, $observaciones);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }

    // Método para eliminar una reserva
    public function DeleteReserva()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            // Obtener el id de la reserva del formulario
            $id = $_POST['id'];

            // Crear una instancia de la clase Reserva
            $reservaModel = new Reserva();

            // Intentar eliminar la reserva
            $resultado = $reservaModel->eliminarReserva($id);

            // Devolver el resultado como JSON
            echo json_encode($resultado);
        }
    }
}

// Verificar la acción
$action = $_POST['action'] ?? '';
$controller = new ReservaController();

if ($action === 'create') {
    $controller->CreateReserva();
} elseif ($action === 'read') {
    $controller->ReadReservas();
} elseif ($action === 'readByDate') {
    $controller->ReadReservasByDate();
}elseif ($action === 'readByUsuario') {
    $argument = $_SESSION['ci'];
    $controller->ReadReservasByUsuario($argument);
}elseif ($action === 'update') {
    $controller->UpdateReserva();
} elseif ($action === 'delete') {
    $controller->DeleteReserva();
}
