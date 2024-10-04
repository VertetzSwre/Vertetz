<?php
require_once('../DataBase/Connection.php');
class Reserva extends Connection
{
    private $id; //Primary Key
    private $estado;
    private $fecha;
    private $hora_inicio; //Esto es del atributo "horario"
    private $hora_fin; //Esto es del atributo "horario"
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

    public function registrarReserva($id, $estado, $fecha, $hora_inicio, $hora_fin, $observaciones, $nombre_institucion = null, $codigo_area = null)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO reserva 
                (id, estado, fecha, hora_inicio, hora_fin, observaciones, nombre_institucion, codigo_area) 
                VALUES 
                (:id, :estado, :fecha, :hora_inicio, :hora_fin, :observaciones, :nombre_institucion, :codigo_area)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
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

    public function getAllReservas()
    {
        $conn = $this->getConnection();
        try {
            // Preparar y ejecutar la consulta SQL para obtener todos los usuarios
            $sql = "SELECT * FROM reserva";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            // Fetch all reserves as an associative array
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
}


?>