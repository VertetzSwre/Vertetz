<?php
require_once('../../Model/DataBase/Connection.php');

class Usuario extends Connection
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

    // Métodos CRUD

    // Método para registrar un usuario
    public function registrarUsuario($ci, $contrasena, $nombre_completo, $mail_personal, $telefono, $mail_corporativo)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO usuario 
                    (ci, contrasena, nombre_completo, mail_personal, telefono, mail_corporativo) 
                    VALUES 
                    (:ci, :contrasena, :nombre_completo, :mail_personal, :telefono, :mail_corporativo)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':ci', $ci, PDO::PARAM_INT);
            $stmt->bindParam(':contrasena', $contrasena, PDO::PARAM_STR);
            $stmt->bindParam(':nombre_completo', $nombre_completo, PDO::PARAM_STR);
            $stmt->bindParam(':mail_personal', $mail_personal, PDO::PARAM_STR);
            $stmt->bindParam(':telefono', $telefono, PDO::PARAM_STR);
            $stmt->bindParam(':mail_corporativo', $mail_corporativo, PDO::PARAM_STR);

            $stmt->execute();

            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al registrar usuario.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para obtener todos los usuarios
    public function getAllUsuarios()
    {
        $conn = $this->getConnection();

        try {
            $sql = "SELECT * FROM usuario";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para actualizar un usuario
    public function actualizarUsuario($ci, $contrasena, $nombre_completo, $mail_personal, $telefono, $mail_corporativo)
    {
        $conn = $this->getConnection();

        try {
            $sql = "UPDATE usuario 
                    SET contrasena = :contrasena, 
                        nombre_completo = :nombre_completo, 
                        mail_personal = :mail_personal, 
                        telefono = :telefono, 
                        mail_corporativo = :mail_corporativo
                    WHERE ci = :ci";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':ci', $ci, PDO::PARAM_INT);
            $stmt->bindParam(':contrasena', $contrasena, PDO::PARAM_STR);
            $stmt->bindParam(':nombre_completo', $nombre_completo, PDO::PARAM_STR);
            $stmt->bindParam(':mail_personal', $mail_personal, PDO::PARAM_STR);
            $stmt->bindParam(':telefono', $telefono, PDO::PARAM_STR);
            $stmt->bindParam(':mail_corporativo', $mail_corporativo, PDO::PARAM_STR);

            $stmt->execute();

            return ['estado' => 'Actualización exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al actualizar usuario.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para eliminar un usuario
    public function eliminarUsuario($ci)
    {
        $conn = $this->getConnection();

        try {
            $sql = "DELETE FROM usuario WHERE ci = :ci";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ci', $ci, PDO::PARAM_INT);
            $stmt->execute();

            return ['estado' => 'Eliminación exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al eliminar usuario.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para validar el login de un usuario
    public function ValidarLogin($ci, $pass)
    {
        $conn = $this->getConnection();

        try {
            $sql = "SELECT * FROM usuario WHERE ci = :ci";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ci', $ci, PDO::PARAM_INT);
            $stmt->execute();

            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario && $pass == $usuario['contrasena']) {
                $this->ci = $usuario['ci'];
                $this->contrasena = $usuario['contrasena'];
                $this->nombre_completo = $usuario['nombre_completo'];
                $this->mail_personal = $usuario['mail_personal'];
                $this->telefono = $usuario['telefono'];
                $this->mail_corporativo = $usuario['mail_corporativo'];
                $this->foto_perfil = $usuario['foto_perfil'];

                return ['estado' => 'Login exitoso!'];
            } else {
                return ['estado' => 'Credenciales incorrectas.'];
            }
        } catch (PDOException $e) {
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }
}
?>
