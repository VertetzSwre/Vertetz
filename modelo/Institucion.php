<?php
require_once('Conexion.php');

class Institucion extends Conexion
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
        $conn = $this->getConexion();

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
            $this->cerrarConexion();
        }
    }

    public function registrarDatosContacto($nombre_institucion, $email, $telefono)
{
    $conn = $this->getConexion();

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
        $this->cerrarConexion();
    }
}

    public function getAllInstituciones()
    {
        $conn = $this->getConexion();
        try {
            // Preparar y ejecutar la consulta SQL para obtener todos los usuarios
            $sql = "SELECT * FROM institucion";
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