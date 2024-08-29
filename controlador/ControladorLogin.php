<?php
    require_once '../modelo/Usuario.php';

    header('Content-Type: application/json'); // Establece el tipo de contenido a JSON
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        
        // Obtener datos del formulario
        $cedula = $_POST['cedula'];
        $contrasena = $_POST['contrasena'];
    
        // $contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);
    
    
        // Creacion de la insancia con la logica del login.
        $loginModel = new Usuario();
        $resultado = $loginModel->ValidarLogin($cedula, $contrasena);
    
        if ($resultado['estado'] === 'Login exitoso!') {
            // Crear el array con los datos del usuario utilizando los getters
            $usuarioArray = [
                'ci' => $loginModel->getCi(),
                'contrasena' => $loginModel->getContrasena(),
                'nombre_completo' => $loginModel->getNombreCompleto(),
                'telefono' => $loginModel->getTelefono(),
                'mail_corporativo' => $loginModel->getMailCorporativo(),
                'mail_personal' => $loginModel->getMailPersonal(),
                'foto_perfil' => $loginModel->getFotoPerfil(),
                'tipo_empleado' => $loginModel->getTipoEmpleado()
            ];
            
            echo json_encode([
                'estado' => $resultado['estado'],
                'usuario' => $usuarioArray
            ]);
        } else {
            echo json_encode($resultado);
        }
    }
?>