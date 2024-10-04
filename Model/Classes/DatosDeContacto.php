<?php
require_once('../DataBase/Connection.php');

class DatosDeContacto extends Connection
{
    private $nombre_institucion; // Primary Key
    private $email;
    private $telefono;

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }

    // Getters
    public function getNombreInstitucion()
    {
        return $this->nombre_institucion;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getTelefono()
    {
        return $this->telefono;
    }

    // Setters
    public function setNombreInstitucion($nombre_institucion)
    {
        $this->nombre_institucion = $nombre_institucion;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    // Método para registrar datos de contacto
    public function registrarDatosDeContacto($nombre_institucion, $email, $telefono)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO datos_de_contacto 
                    (nombre_institucion, email, telefono) 
                    VALUES 
                    (:nombre_institucion, :email, :telefono)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':nombre_institucion', $nombre_institucion, PDO::PARAM_STR);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $stmt->bindParam(':telefono', $telefono, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al registrar datos de contacto.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para obtener datos de contacto por nombre de institución
    public function obtenerDatosDeContacto($nombre_institucion)
    {
        $conn = $this->getConnection();

        try {
            $sql = "SELECT * FROM datos_de_contacto WHERE nombre_institucion = :nombre_institucion";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombre_institucion', $nombre_institucion, PDO::PARAM_STR);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al obtener datos de contacto.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }
}
?>
