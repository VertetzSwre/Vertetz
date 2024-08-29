<?php
require_once '../modelo/Servicio.php';

$servicioModel = new Servicio();
$servicios = $servicioModel->getAllServicios();
if (isset($_POST['res'])) {
    echo json_encode($servicios);
}
?>