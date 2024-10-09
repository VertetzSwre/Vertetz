<?php
require_once('../../Model/DataBase/Connection.php');

class Area extends Connection
{
    private $codigo; //Primary Key
    private $institucion_perteneciente;
    private $nombre;
    private $tipo;
    private $estado;

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }


    // Getters
    public function getCodigo()
    {
        return $this->codigo;
    }

    public function getInstitucionPerteneciente()
    {
        return $this->institucion_perteneciente;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getTipo()
    {
        return $this->tipo;
    }

    public function getEstado()
    {
        return $this->estado;
    }

    // Setters
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;
    }

    public function setInstitucionPerteneciente($institucion_perteneciente)
    {
        $this->institucion_perteneciente = $institucion_perteneciente;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    public function setEstado($estado)
    {
        $this->estado = $estado;
    }

    public function registrarArea($codigo, $institucion_perteneciente, $nombre, $estado)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO area 
                (codigo, institucion_perteneciente, nombre, estado) 
                VALUES 
                (:codigo, :institucion_perteneciente, :nombre, :estado)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':codigo', $codigo, PDO::PARAM_INT);
            $stmt->bindParam(':institucion_perteneciente', $institucion_perteneciente, PDO::PARAM_STR);
            $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $stmt->bindParam(':estado', $estado, PDO::PARAM_STR);

            $stmt->execute();

            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al registrar área.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }
    public function obtenerAreas()
    {
        $conn = $this->getConnection();
        try {
            // Preparar y ejecutar la consulta SQL para obtener todos los usuarios
            $sql = "SELECT * FROM area";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $reservas = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $reservas; // Devolver el array de usuarios
        } catch (PDOException $e) {
            // Manejar posibles errores de la consulta
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            // Cerrar la conexión
            $this->closeConnection();
        }
    }

    public function updateArea($codigo, $instituto, $nombre, $tipo, $estado)
    {
        $conn = $this->getConnection();
        try {
            $sql = "UPDATE area 
                    SET codigo=:codigo, institucion_perteneciente=:instituto, nombre=:nombre, tipo=:tipo, estado=:estado 
                    WHERE codigo=:codigo";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':codigo', $codigo, PDO::PARAM_INT);
            $stmt->bindParam(':instituto', $instituto, PDO::PARAM_STR);
            $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $stmt->bindParam(':estado', $estado, PDO::PARAM_STR);

            $stmt->execute();

            return [
                'estado' => 'exito',
            ];

        } catch (PDOException $e) {
            // Manejar posibles errores de la consulta
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            // Cerrar la conexión
            $this->closeConnection();
        }
    }
    public function deleteArea($codigo)
    {
        $conn = $this->getConnection();
        try {
            $sql = "DELETE FROM area WHERE codigo=:codigo";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':codigo', $codigo, PDO::PARAM_INT);
            $stmt->execute();

            return [
                'estado' => 'exito',
            ];

        } catch (PDOException $e) {
            // Manejar posibles errores de la consulta
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            // Cerrar la conexión
            $this->closeConnection();
        }
    }

}

?>