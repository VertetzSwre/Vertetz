<?php
require_once('Conexion.php');

class Institucion extends Conexion
{
    private $nombre; // Primary Key
    private $calle; // Esto es del atributo compuesto "direccion"
    private $esquina; // Esto es del atributo compuesto "direccion"
    private $puerta; // Esto es del atributo compuesto "direccion"
    private $email; // Esto es del atributo multivaluado "datos_de_contacto"
    private $telefono; // Esto es del atributo multivaluado "datos_de_contacto"

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

    public function getEmail()
    {
        return $this->email;
    }

    public function getTelefono()
    {
        return $this->telefono;
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

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
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
