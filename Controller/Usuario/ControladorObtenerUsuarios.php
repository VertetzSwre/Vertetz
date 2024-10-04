<?php
require_once '../../Model/Classes/Usuario.php';

$usuarioModel = new Usuario();
$usuarios = $usuarioModel->getAllUsuarios();

    if (isset($usuarios['estado']) && $usuarios['estado'] === 'Error en la consulta.') {
        // Manejar error
        echo json_encode($usuarios);
    } else {
        // Imprimir los datos de todos los usuarios en formato JSON
        echo json_encode($usuarios);
    }
?>