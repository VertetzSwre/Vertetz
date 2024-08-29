<?php
require_once('Conexion.php');
class Servicio extends Conexion
{
    private $id_servicio; //Primary Key
    private $nombre;
    private $tipo_servicio;
    private $descripcion;

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }


    // Getters
    public function getIdServicio()
    {
        return $this->id_servicio;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getTipoServicio()
    {
        return $this->tipo_servicio;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }

    // Setters
    public function setIdServicio($id_servicio)
    {
        $this->id_servicio = $id_servicio;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function setTipoServicio($tipo_servicio)
    {
        $this->tipo_servicio = $tipo_servicio;
    }

    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }

    public function getAllServicios()
    {
        $conn = $this->getConexion();
        try {
            // Preparar y ejecutar la consulta SQL para obtener todos los usuarios
            $sql = "SELECT * FROM servicio";
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
            $this->cerrarConexion();
        }
    }
}

?>