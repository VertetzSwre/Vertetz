<?php
require_once '../../Model/Classes/Usuario.php';

header('Content-Type: application/json'); // Establece el tipo de contenido a JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Obtener datos del formulario
    $ci = $_POST['ci'];
    $contrasena = $_POST['contrasena'];
    $nombre_completo = $_POST['nombre_completo'];
    $mail_corporativo = $_POST['mail_corporativo'];   
    $telefono = $_POST['telefono'];
    $mail_personal = $_POST['mail_personal'];
    //$foto_perfil = $_POST['foto_perfil'];
    //$tipo_empleado = $_POST['tipo_empleado'];
    
    // Crear una instancia de la clase Usuario
    $usuarioModel = new Usuario();
    
    // Intentar registrar al nuevo usuario
    $resultado = $usuarioModel->registrarUsuario($ci, $contrasena, $nombre_completo, $mail_corporativo, $telefono,  $mail_personal /*, $foto_perfil, $tipo_empleado*/);
    
    // Devolver el resultado como JSON
    echo json_encode($resultado);
}
?>
