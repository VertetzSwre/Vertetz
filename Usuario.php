<?php
require_once 'Conexion.php';

class Usuario extends Conexion
{
    private $ci; // Primary Key
    private $nombre_usuario;
    private $contrasena; // Corregido de 'contraseña' a 'contrasena'
    private $nombre_completo;
    private $telefono;
    private $mail_corporativo;
    private $mail_personal;
    private $foto_perfil;
    private $tipo_empleado;

    public function __construct()
    {
        parent::__construct(); // Asegúrate de llamar al constructor de la clase base
    }

    // Getters
    public function getCi()
    {
        return $this->ci;
    }

    public function getNombreUsuario()
    {
        return $this->nombre_usuario;
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

    public function setNombreUsuario($nombre_usuario)
    {
        $this->nombre_usuario = $nombre_usuario;
    }

    public function setContrasena($contrasena) // Corregido aquí
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
}
?>