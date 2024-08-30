<?php
require_once '../modelo/Reserva.php';
require_once '../modelo/Tiene.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener datos del formulario para Reserva
    $id_reserva = $_POST['id_reserva'];
    $estado = $_POST['estado'];
    $fecha = $_POST['fecha'];
    $hora_inicio = $_POST['hora_inicio'];
    $hora_fin = $_POST['hora_fin'];
    $observaciones = $_POST['observaciones'];
    $nombre_institucion = $_POST['nombre_institucion'];
    $codigo_area = $_POST['codigo_area'];

    // Obtener datos del formulario para Tiene
    $id_servicio = $_POST['id_servicio'];
    $cantidad = $_POST['cantidad'];

    // Crear instancias de los modelos
    $reservaModel = new Reserva();
    $tieneModel = new Tiene();

    // Registrar la reserva
    $resultadoReserva = $reservaModel->registrarReserva($id_reserva, $estado, $fecha, $hora_inicio, $hora_fin, $observaciones, $nombre_institucion, $codigo_area);

    if ($resultadoReserva['estado'] === 'Registro exitoso!') {
        // Registrar en la tabla Tiene si la reserva se ha registrado correctamente
        $resultadoTiene = $tieneModel->registrarTiene($id_servicio, $cantidad);
        
        echo json_encode([
            'estadoReserva' => $resultadoReserva['estado'],
            'estadoTiene' => $resultadoTiene['estado']
        ]);
    } else {
        // Si hubo un error al registrar la reserva, devolver ese error
        echo json_encode([
            'estadoReserva' => $resultadoReserva['estado']
        ]);
    }
}
?>
