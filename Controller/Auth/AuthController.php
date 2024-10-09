<?php
session_start(); // Iniciar la sesión

require_once '../../Model/Classes/Usuario.php';

class AuthController
{
    private $usuarioModel;

    public function __construct()
    {
        $this->usuarioModel = new Usuario(); // Instanciar el modelo de Usuario
    }

    public function login($ci, $contrasena)
    {
        $resultado = $this->usuarioModel->ValidarLogin($ci, $contrasena);

        if ($resultado['estado'] === 'Login exitoso!') {
            // Guardar los datos del usuario en la sesión
            $_SESSION['ci'] = $this->usuarioModel->getCi();
            $_SESSION['nombre_completo'] = $this->usuarioModel->getNombreCompleto();
            $_SESSION['logueado'] = true;

            // Retornar respuesta de éxito
            return ['estado' => 'Login exitoso', 'usuario' => $_SESSION['nombre_completo']];
        } else {
            return ['estado' => $resultado['estado']];
        }
    }

    public function logout()
    {
        session_destroy(); // Destruir la sesión
        return ['estado' => 'Logout exitoso'];
    }

    public function verificarSesion()
    {
        // Verificar si el usuario está logueado
        if (isset($_SESSION['logueado'])) {
            return ['logueado' => true, 'usuario' => $_SESSION['nombre_completo']];
        } else {
            return ['logueado' => false];
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $authController = new AuthController();

    $action = $_POST['action'] ?? '';

    switch ($action) {
        case 'login':
            $ci = $_POST['ci'] ?? '';
            $contrasena = $_POST['contrasena'] ?? '';
            $response = $authController->login($ci, $contrasena);
            break;
        case 'logout':
            $response = $authController->logout();
            break;
        case 'verificar_sesion':
            $response = $authController->verificarSesion();
            break;
        default:
            $response = ['estado' => 'Acción no válida'];
    }

    // Retornar respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
