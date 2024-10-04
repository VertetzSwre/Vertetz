<?php
require_once '../../Model/Classes/Area.php';

$areaModel = new Area();
$areas = $areaModel->getAllAreas();
if (isset($_POST['res'])) {
    echo json_encode($areas);
}
?>