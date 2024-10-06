<?php
require_once '../Model/Institucion.php';

$institucionModel = new Institucion();
$instituciones = $institucionModel->getAllInstituciones();
if (isset($_POST['res'])) {
echo json_encode($instituciones);
}
?>