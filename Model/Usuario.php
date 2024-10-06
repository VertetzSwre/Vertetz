<?php
require_once 'Conexion.php';

class Usuario extends Conexion
{
    private $ci;
    private $contrasena;
    private $nombre_completo;
    private $telefono;
    private $mail_corporativo;
    private $mail_personal;
    private $foto_perfil;
    private $tipo_empleado;

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }

    // Getters
    public function getCi()
    {
        return $this->ci;
    }

    public function getContrasena()
    {
        return $this->contrasena;
    }

    public function getNombreCompleto()
    {
        return $this->nombre_completo;
    }

    public function getTelefono()
    {
        return $this->telefono;
    }

    public function getMailCorporativo()
    {
        return $this->mail_corporativo;
    }

    public function getMailPersonal()
    {
        return $this->mail_personal;
    }

    public function getFotoPerfil()
    {
        return $this->foto_perfil;
    }

    public function getTipoEmpleado()
    {
        return $this->tipo_empleado;
    }

    // Setters
    public function setCi($ci)
    {
        $this->ci = $ci;
    }


    public function setContrasena($contrasena)
    {
        $this->contrasena = $contrasena;
    }

    public function setNombreCompleto($nombre_completo)
    {
        $this->nombre_completo = $nombre_completo;
    }

    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    public function setMailCorporativo($mail_corporativo)
    {
        $this->mail_corporativo = $mail_corporativo;
    }

    public function setMailPersonal($mail_personal)
    {
        $this->mail_personal = $mail_personal;
    }

    public function setFotoPerfil($foto_perfil)
    {
        $this->foto_perfil = $foto_perfil;
    }

    public function setTipoEmpleado($tipo_empleado)
    {
        $this->tipo_empleado = $tipo_empleado;
    }

    // Métodos para control de datos del usuario con la BD
    public function ValidarLogin($ci, $pass)
    {
        $conn = $this->getConexion();

        try {
            // Preparar y ejecutar la consulta SQL
            $sql = "SELECT * FROM usuario WHERE ci = :ci";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ci', $ci, PDO::PARAM_INT);
            $stmt->execute();
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario) {
                // Comparar la contraseña proporcionada con la almacenada
                if ($pass == $usuario['contrasena']) {
                    // Asignar valores a las propiedades de la clase    
                    $this->ci = $usuario['ci'];
                    $this->contrasena = $usuario['contrasena'];
                    $this->nombre_completo = $usuario['nombre_completo'];
                    $this->mail_personal = $usuario['mail_personal'];
                    $this->telefono = $usuario['telefono'];
                    $this->mail_corporativo = $usuario['mail_corporativo'];
                    $this->foto_perfil = $usuario['foto_perfil'];
                    //$this->tipo_empleado = $usuario['tipo_empleado'];

                    return ['estado' => 'Login exitoso!'];
                } else {
                    return ['estado' => 'Contraseña incorrecta.'];
                }
            } else {
                return ['estado' => 'Usuario incorrecto.'];
            }
        } catch (PDOException $e) {
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            // Cerrar la conexión
            $this->cerrarConexion();
        }
    }

    public function getAllUsuarios()
    {
        $conn = $this->getConexion();
        try {
            // Preparar y ejecutar la consulta SQL para obtener todos los usuarios
            $sql = "SELECT * FROM usuario";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            // Fetch all users as an associative array
            $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $usuarios; // Devolver el array de usuarios
        } catch (PDOException $e) {
            // Manejar posibles errores de la consulta
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            // Cerrar la conexión
            $this->cerrarConexion();
        }
    }

    public function registrarUsuario($ci, $contrasena, $nombre_completo, $mail_personal, $telefono, $mail_corporativo/*, $foto_perfil, $tipo_empleado*/)
    {
        $conn = $this->getConexion();
    
        try {
            // Preparar la consulta SQL para insertar un nuevo usuario
            $sql = "INSERT INTO usuario 
                    (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo/*, foto_perfil, tipo_empleado*/) 
                    VALUES 
                    (:ci, :contrasena, :nombre_completo, :mail_personal, :telefono, :mail_corporativo/*, :foto_perfil, :tipo_empleado*/)";
    
            $stmt = $conn->prepare($sql);
            
            $stmt->bindParam(':ci', $ci, PDO::PARAM_INT);
            $stmt->bindParam(':contrasena', $contrasena, PDO::PARAM_STR); // Considera usar password_hash() para mayor seguridad
            $stmt->bindParam(':nombre_completo', $nombre_completo, PDO::PARAM_STR);
            $stmt->bindParam(':mail_personal', $mail_personal, PDO::PARAM_STR);
            $stmt->bindParam(':telefono', $telefono, PDO::PARAM_STR);
            $stmt->bindParam(':mail_corporativo', $mail_corporativo, PDO::PARAM_STR);
            //$stmt->bindParam(':foto_perfil', $foto_perfil, PDO::PARAM_STR);
            //$stmt->bindParam(':tipo_empleado', $tipo_empleado, PDO::PARAM_STR);
    
            $stmt->execute();  // Ejecuta la consulta
    
            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            // Manejar posibles errores de la consulta
            return [
                'estado' => 'Error al registrar usuario.',
                'error' => $e->getMessage()
            ];
        } finally {
            // Cerrar la conexión
            $this->cerrarConexion();
        }
    }
}

?>