<?php
require_once '../modelo/Institucion.php';

$institucionModel = new Institucion();
$instituciones = $institucionModel->getAllInstituciones();
if (isset($_POST['res'])) {
echo json_encode($instituciones);
}
?>