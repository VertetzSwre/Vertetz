<?php
require_once '../modelo/Reserva.php';

$reservaModel = new Reserva();
$reservas = $reservaModel->getAllReservas();

    if (isset($_POST['res'])) {
        echo json_encode($reservas);
    }
?>