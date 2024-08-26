<?php
class Conexion {
    private $conexion;

    public function __construct() {
        // Establecer la conexión
        $this->conexion = new mysqli('localhost', 'root', '', 'vertetz_roomanagy');

        // Verifica si la conexión fue exitosa
        if ($this->conexion->connect_error) {
            die("Conexión fallida: " . $this->conexion->connect_error);
        }
    }

    // Getter de la conexión
    protected function getConexion() {
        return $this->conexion;
    }

    // Método para cerrar la conexión
    public function cerrarConexion() {
        mysqli_close($this->conexion);
    }
}
?>