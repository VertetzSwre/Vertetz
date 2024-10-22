<?php
session_start(); // Iniciar la sesión
header('Content-Type: application/json; charset=utf-8');

require_once '../../Model/Classes/Usuario.php';
require_once '../../Model/Classes/Institucion.php';

class AuthController
{
    private $usuarioModel;
    private $institucionModel;

    public function __construct()
    {
        $this->usuarioModel = new Usuario(); // Instanciar el modelo de Usuario
        $this->institucionModel = new Institucion(); // Instanciar el modelo de Institución
    }

    public function login($ci, $contrasena)
    {
        $resultado = $this->usuarioModel->ValidarLogin($ci, $contrasena);

        if ($resultado['estado'] == 'Login exitoso!') {
            // Guardar los datos del usuario en la sesión
            $_SESSION['ci'] = $this->usuarioModel->getCi();
            $_SESSION['nombre_completo'] = $this->usuarioModel->getNombreCompleto();
            $_SESSION['logueado'] = true;

            // Obtener las instituciones del usuario
            $instituciones = $this->institucionModel->obtenerInstituciones($this->usuarioModel->getCi());
            $_SESSION['instituciones'] =  $instituciones;

            // Retornar respuesta de éxito con instituciones
            return [
                'estado' => 'Login exitoso',
                'usuario' => $_SESSION['nombre_completo'],
                'instituciones' => $_SESSION['instituciones']
            ];
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
            echo json_encode($response);
            break;
        case 'logout':
            $response = $authController->logout();
            echo json_encode($response);
            break;
        case 'verificar_sesion':
            $response = $authController->verificarSesion();
            echo json_encode($response);
            break;
        default:
            $response = ['estado' => 'Acción no válida'];
            echo json_encode($response);
    }
    exit;
}
