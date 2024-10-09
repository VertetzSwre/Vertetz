<?php
require_once '../../Model/Classes/Usuario.php';

class UsuarioController
{
    // Método para registrar un nuevo usuario
    public function createUsuario()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $ci = $_POST['ci'];
            $contrasena = $_POST['contrasena'];
            $nombre_completo = $_POST['nombre_completo'];
            $mail_personal = $_POST['mail_personal'];
            $telefono = $_POST['telefono'];
            $mail_corporativo = $_POST['mail_corporativo'];

            $usuarioModel = new Usuario();
            $resultado = $usuarioModel->registrarUsuario($ci, $contrasena, $nombre_completo, $mail_personal, $telefono, $mail_corporativo);

            echo json_encode($resultado);
        }
    }

    // Método para obtener todos los usuarios
    public function readUsuarios()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $usuarioModel = new Usuario();
            $resultado = $usuarioModel->getAllUsuarios();

            echo json_encode($resultado);
        }
    }

    // Método para actualizar un usuario
    public function updateUsuario()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $ci = $_POST['ci'];
            $contrasena = $_POST['contrasena'];
            $nombre_completo = $_POST['nombre_completo'];
            $mail_personal = $_POST['mail_personal'];
            $telefono = $_POST['telefono'];
            $mail_corporativo = $_POST['mail_corporativo'];

            $usuarioModel = new Usuario();
            $resultado = $usuarioModel->actualizarUsuario($ci, $contrasena, $nombre_completo, $mail_personal, $telefono, $mail_corporativo);

            echo json_encode($resultado);
        }
    }

    // Método para eliminar un usuario
    public function deleteUsuario()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $ci = $_POST['ci'];

            $usuarioModel = new Usuario();
            $resultado = $usuarioModel->eliminarUsuario($ci);

            echo json_encode($resultado);
        }
    }

    // Método para validar el login de un usuario
    public function loginUsuario()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $ci = $_POST['ci'];
            $pass = $_POST['pass'];

            $usuarioModel = new Usuario();
            $resultado = $usuarioModel->ValidarLogin($ci, $pass);

            echo json_encode($resultado);
        }
    }
}

// Crear una instancia del controlador y procesar las solicitudes
$controller = new UsuarioController();

switch ($_GET['action']) {
    case 'create':
        $controller->createUsuario();
        break;
    case 'read':
        $controller->readUsuarios();
        break;
    case 'update':
        $controller->updateUsuario();
        break;
    case 'delete':
        $controller->deleteUsuario();
        break;
    case 'login':
        $controller->loginUsuario();
        break;
    default:
        echo json_encode(['estado' => 'Acción no reconocida.']);
        break;
}
?>
