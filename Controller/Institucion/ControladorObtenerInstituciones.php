<?php
require_once '../../Model/Classes/Institucion.php';

$institucionModel = new Institucion();
$instituciones = $institucionModel->getAllInstituciones();
if (isset($_POST['res'])) {
echo json_encode($instituciones);
}
?>