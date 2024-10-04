<?php
require_once '../../Model/Classes/DatosDeContacto.php';

header('Content-Type: application/json'); // Establece el tipo de contenido a JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Obtener datos del formulario 
    $telefono = $_POST['telefono'];
    $mail = $_POST['mail'];
    $institucion = $_POST['institucion'];

    
    // Crear una instancia de la clase Datos de contacto
    $datosdecontactoModel = new DatosDeContacto();
    
    // Intentar registrar al nuevo usuario
    $resultado = $datosdecontactoModel->registrarDatosDeContacto($institucion, $mail, $telefono);
    
    // Devolver el resultado como JSON
    echo json_encode($resultado);
}
?>
