<?php
require_once('../../Model/DataBase/Connection.php');

class Institucion extends Connection
{
    private $nombre; // Primary Key
    private $calle; // Esto es del atributo compuesto "direccion"
    private $esquina; // Esto es del atributo compuesto "direccion"
    private $puerta; // Esto es del atributo compuesto "direccion"

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }

    // Getters
    public function getNombre()
    {
        return $this->nombre;
    }

    public function getCalle()
    {
        return $this->calle;
    }

    public function getEsquina()
    {
        return $this->esquina;
    }

    public function getPuerta()
    {
        return $this->puerta;
    }

    // Setters
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function setCalle($calle)
    {
        $this->calle = $calle;
    }

    public function setEsquina($esquina)
    {
        $this->esquina = $esquina;
    }

    public function setPuerta($puerta)
    {
        $this->puerta = $puerta;
    }

    public function registrarInstitucion($nombre, $calle, $esquina, $puerta)
    {
        $conn = $this->getConnection();

        try {
            $sql = "INSERT INTO institucion 
                (nombre, calle, esquina, puerta) 
                VALUES 
                (:nombre, :calle, :esquina, :puerta)";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $stmt->bindParam(':calle', $calle, PDO::PARAM_STR);
            $stmt->bindParam(':esquina', $esquina, PDO::PARAM_STR);
            $stmt->bindParam(':puerta', $puerta, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Registro exitoso!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al registrar institución.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    public function obtenerInstituciones($cedula)
    {
        $conn = $this->getConnection();
        try {
            // Preparar y ejecutar la consulta SQL para obtener todos los usuarios
            $sql = "SELECT i.nombre
                    FROM Institucion i
                    JOIN Pertenece p ON i.nombre = p.nombre_institucion
                    JOIN Usuario u ON p.ci_usuario = u.ci
                    WHERE u.ci = :ci";  // Sin comillas en :ci
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':ci', $cedula, PDO::PARAM_STR); // Asegurarse de que el tipo es correcto
            
            $stmt->execute();
    
            // Guarda los datos en un array asociativo
            $instituciones = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            return $instituciones; // Devolver el array de instituciones
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
    public function getInstitucionByName($nombre)
    {
        $conn = $this->getConnection();
        try {
            // Preparar y ejecutar la consulta SQL para obtener todos los usuarios
            $sql = "SELECT * FROM institucion WHERE nombre = :nombre";  // Sin comillas en :ci
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR); // Asegurarse de que el tipo es correcto
            
            $stmt->execute();
    
            // Guarda los datos en un array asociativo
            $instituciones = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            return $instituciones; // Devolver el array de instituciones
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
    

    // Método para buscar institucion por coincidencias
    public function searchInstitucion($value)
    {
        $conn = $this->getConnection(); // Obtener la conexión
        try {
            // Consulta SQL con parámetros de búsqueda
            $sql = "SELECT * 
                    FROM Institucion 
                    WHERE nombre LIKE :nombre";

            $stmt = $conn->prepare($sql); // Preparar la consulta

            // Añadir comodines al valor para usar con LIKE
            $searchValue = '%' . $value . '%';

            // Vincular los parámetros
            $stmt->bindParam(':nombre', $searchValue, PDO::PARAM_STR);


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

    public function actualizarInstitucion($nombre, $calle, $esquina, $puerta)
    {
        $conn = $this->getConnection();

        try {
            $sql = "UPDATE institucion 
                SET calle = :calle, esquina = :esquina, puerta = :puerta 
                WHERE nombre = :nombre";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $stmt->bindParam(':calle', $calle, PDO::PARAM_STR);
            $stmt->bindParam(':esquina', $esquina, PDO::PARAM_STR);
            $stmt->bindParam(':puerta', $puerta, PDO::PARAM_INT);

            $stmt->execute();

            return ['estado' => 'Actualización exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al actualizar la institución.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }

    public function eliminarInstitucion($nombre)
    {
        $conn = $this->getConnection();

        try {
            $sql = "DELETE FROM institucion WHERE nombre = :nombre";

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $stmt->execute();

            return ['estado' => 'Eliminación exitosa!'];
        } catch (PDOException $e) {
            return [
                'estado' => 'Error al eliminar la institución.',
                'error' => $e->getMessage()
            ];
        } finally {
            $this->closeConnection();
        }
    }
}
