<?php
require_once('../../Model/DataBase/Connection.php');
class Servicio extends Connection
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

    public function registrarServicio($id_servicio, $tipo_servicio, $descripcion = null)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO servicio 
                (id_servicio, tipo_servicio, descripcion) 
                VALUES 
                (:id_servicio, :tipo_servicio, :descripcion)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':id_servicio', $id_servicio, PDO::PARAM_INT);
            $stmt->bindParam(':tipo_servicio', $tipo_servicio, PDO::PARAM_STR);
            $stmt->bindParam(':descripcion', $descripcion, PDO::PARAM_STR);

            $stmt->execute();

            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al registrar servicio.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    public function obtenerServicios()
    {
        $conn = $this->getConnection();
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
            $this->closeConnection();
        }
    }

    // Método para buscar servicio por coincidencias
    public function searchServicio($value)
    {
        $conn = $this->getConnection(); // Obtener la conexión
        try {
            // Consulta SQL con parámetros de búsqueda
            $sql = "SELECT * 
                        FROM institucion 
                        WHERE id_servicio LIKE :id_servicio
                            OR tipo_servicio LIKE :tipo_servicio";

            $stmt = $conn->prepare($sql); // Preparar la consulta

            // Añadir comodines al valor para usar con LIKE
            $searchValue = '%' . $value . '%';

            // Vincular los parámetros
            $stmt->bindParam(':id_servicio', $searchValue, PDO::PARAM_STR);
            $stmt->bindParam(':tipo_servicio', $searchValue, PDO::PARAM_STR);


            $stmt->execute(); // Ejecutar la consulta

            // Obtener los resultados
            $reservas = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $reservas; // Devolver los resultados
        } catch (PDOException $e) {
            // Devolver un array de error si ocurre una excepción
            return [
                'estado' => 'Error en la consulta.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection(); // Cerrar la conexión siempre
        }
    }

    // Método para actualizar un servicio
    public function actualizarServicio($id_servicio, $tipo_servicio, $descripcion = null)
    {
        $conn = $this->getConnection();

        try {
            $sql = "UPDATE servicio 
                        SET tipo_servicio = :tipo_servicio, descripcion = :descripcion
                        WHERE id_servicio = :id_servicio";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':id_servicio', $id_servicio, PDO::PARAM_INT);
            $stmt->bindParam(':tipo_servicio', $tipo_servicio, PDO::PARAM_STR);
            $stmt->bindParam(':descripcion', $descripcion, PDO::PARAM_STR);

            $stmt->execute();

            return ['estado' => 'Actualización exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al actualizar el servicio.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    // Método para eliminar un servicio
    public function eliminarServicio($id_servicio)
    {
        $conn = $this->getConnection();

        try {
            $sql = "DELETE FROM servicio WHERE id_servicio = :id_servicio";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':id_servicio', $id_servicio, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Eliminación exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al eliminar el servicio.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }
}
