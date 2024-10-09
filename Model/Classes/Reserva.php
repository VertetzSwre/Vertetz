<?php
require_once('../../Model/DataBase/Connection.php');

class Reserva extends Connection
{
    private $id; // Primary Key
    private $estado;
    private $fecha;
    private $hora_inicio; // Esto es del atributo "horario"
    private $hora_fin; // Esto es del atributo "horario"
    private $observaciones;

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }

    // Getters
    public function getId()
    {
        return $this->id;
    }

    public function getEstado()
    {
        return $this->estado;
    }

    public function getFecha()
    {
        return $this->fecha;
    }

    public function getHoraInicio()
    {
        return $this->hora_inicio;
    }

    public function getHoraFin()
    {
        return $this->hora_fin;
    }

    public function getObservaciones()
    {
        return $this->observaciones;
    }

    // Setters
    public function setId($id)
    {
        $this->id = $id;
    }

    public function setEstado($estado)
    {
        $this->estado = $estado;
    }

    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    public function setHoraInicio($hora_inicio)
    {
        $this->hora_inicio = $hora_inicio;
    }

    public function setHoraFin($hora_fin)
    {
        $this->hora_fin = $hora_fin;
    }

    public function setObservaciones($observaciones)
    {
        $this->observaciones = $observaciones;
    }

    // Método para registrar una reserva
    public function registrarReserva($estado, $fecha, $hora_inicio, $hora_fin, $observaciones, $nombre_institucion = null, $codigo_area = null)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO reserva 
                    (estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area) 
                    VALUES 
                    (:estado, :fecha, :hora_inicio, :hora_fin, :observaciones, :nombre_institucion, :codigo_area)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':estado', $estado, PDO::PARAM_STR);
            $stmt->bindParam(':fecha', $fecha);
            $stmt->bindParam(':hora_inicio', $hora_inicio);
            $stmt->bindParam(':hora_fin', $hora_fin);
            $stmt->bindParam(':observaciones', $observaciones, PDO::PARAM_STR);
            $stmt->bindParam(':nombre_institucion', $nombre_institucion, PDO::PARAM_STR);
            $stmt->bindParam(':codigo_area', $codigo_area, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al registrar reserva.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para obtener todas las reservas
    public function obtenerReservas()
    {
        $conn = $this->getConnection();
        try {
            $sql = "SELECT * FROM reserva";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $reservas = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $reservas;
        } catch (PDOException $e) {
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para obtener una reserva por ID
    public function obtenerReservaPorId($id)
    {
        $conn = $this->getConnection();
        try {
            $sql = "SELECT * FROM reserva WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();

            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al obtener la reserva.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para editar una reserva
    public function actualizarReserva($id, $estado, $fecha, $hora_inicio, $hora_fin, $observaciones, $nombre_institucion = null, $codigo_area = null)
    {
        $conn = $this->getConnection();

        try {
            $sql = "UPDATE reserva 
                    SET estado = :estado, fecha = :fecha, hora_inicio = :hora_inicio, 
                        hora_fin = :hora_fin, observaciones = :observaciones, 
                        nombre_institucion = :nombre_institucion, codigo_area = :codigo_area
                    WHERE id = :id";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':estado', $estado, PDO::PARAM_STR);
            $stmt->bindParam(':fecha', $fecha);
            $stmt->bindParam(':hora_inicio', $hora_inicio);
            $stmt->bindParam(':hora_fin', $hora_fin);
            $stmt->bindParam(':observaciones', $observaciones, PDO::PARAM_STR);
            $stmt->bindParam(':nombre_institucion', $nombre_institucion, PDO::PARAM_STR);
            $stmt->bindParam(':codigo_area', $codigo_area, PDO::PARAM_INT);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Reserva actualizada con éxito!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al actualizar la reserva.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para eliminar una reserva
    public function eliminarReserva($id)
    {
        $conn = $this->getConnection();

        try {
            $sql = "DELETE FROM reserva WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();

            return ['estado' => 'Reserva eliminada con éxito!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al eliminar la reserva.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }
}
?>
