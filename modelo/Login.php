<?php
    require_once 'Conexion.php';
    class Login extends Conexion {   

        public function ValidarLogin($ci, $pass){
            //Obtencion de la conexion.
            $conn = $this -> getConexion();

            // Preparar y ejecutar la consulta SQL
            $sql = "SELECT * FROM usuarios WHERE cedula = ?";
            $stmt = $conn->prepare($sql);

            if ($stmt === false) {
                return ['estado' => 'Error al preparar la consulta.'];
            }

            $stmt->bind_param("i", $ci);
            $stmt->execute();
            $result = $stmt->get_result();
    
            // Verificar si se encontró un usuario con la cédula proporcionada
            if ($result->num_rows == 1) {
                $usuario = $result->fetch_assoc();
            
                // Comparar la contraseña proporcionada con la almacenada
                if ($pass == $usuario['contrasena']) {
                        return ['estado' => 'Login exitoso!'];
                } else {
                        return ['estado' => 'Contraseña incorrecta.'];
                }
            } else {
                    return ['estado' => 'Usuario incorrecto.'];
            }
            
            // Cerrar la conexión
            $stmt->close();
            $conn->close();
        }


    }

?>