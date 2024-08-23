<?php
class Conexion {
    private $conexion;

    public function __construct() {
        // Establecer la conexión
        $this->conexion = mysqli_connect('localhost', 'root', '', 'usuarioslogin');

        // Verifica si la conexión fue exitosa
        if (!$this->conexion) {
            die('Error de conexión: ' . mysqli_connect_error());
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