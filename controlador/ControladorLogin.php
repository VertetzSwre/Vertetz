<?php
    require_once '../modelo/Usuario.php';

    header('Content-Type: application/json'); // Establece el tipo de contenido a JSON
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener datos del formulario
        $cedula = $_POST['cedula'];
        $contrasena = $_POST['contrasena'];

        $contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);


        // Creacion de la insancia con la logica del login.
        $loginModel = new Usuario();
        $resultado = $loginModel->ValidarLogin($cedula, $contrasena);

        echo json_encode($resultado);
    }
?>