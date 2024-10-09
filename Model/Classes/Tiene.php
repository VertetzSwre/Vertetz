<?php
require_once('../../Model/DataBase/Connection.php');

class Tiene extends Connection
{
    private $id_servicio; //Primary Key
    private $cantidad;

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }

    // Getters
    public function getIdServicio()
    {
        return $this->id_servicio;
    }

    public function getCantidad()
    {
        return $this->cantidad;
    }

    // Setters
    public function setIdServicio($id_servicio)
    {
        $this->id_servicio = $id_servicio;
    }

    public function setCantidad($cantidad)
    {
        $this->cantidad = $cantidad;
    }

    // Método para registrar un nuevo tiene
    public function registrarTiene($id_servicio, $cantidad)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO tiene 
                    (id_servicio, cantidad) 
                    VALUES 
                    (:id_servicio, :cantidad)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':id_servicio', $id_servicio, PDO::PARAM_INT);
            $stmt->bindParam(':cantidad', $cantidad, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al registrar tiene.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para obtener todos los registros de tiene
    public function obtenerTiene()
    {
        $conn = $this->getConnection();
        try {
            $sql = "SELECT * FROM tiene";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $registros = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $registros;
        } catch (PDOException $e) {
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para actualizar un registro de tiene
    public function actualizarTiene($id_servicio, $cantidad)
    {
        $conn = $this->getConnection();

        try {
            $sql = "UPDATE tiene 
                    SET cantidad = :cantidad
                    WHERE id_servicio = :id_servicio";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':id_servicio', $id_servicio, PDO::PARAM_INT);
            $stmt->bindParam(':cantidad', $cantidad, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Actualización exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al actualizar tiene.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para eliminar un registro de tiene
    public function eliminarTiene($id_servicio)
    {
        $conn = $this->getConnection();

        try {
            $sql = "DELETE FROM tiene WHERE id_servicio = :id_servicio";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':id_servicio', $id_servicio, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Eliminación exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al eliminar tiene.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }
}

?>
