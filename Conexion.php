<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Conexion {
    private $conexion;

    public function __construct() {
        $dsn = 'mysql:host=localhost;dbname=vertetz_roomanagy';
        $user = 'root';
        $password = '';

        try {
            // Establecer la conexión
            $this->conexion = new PDO($dsn, $user, $password);
            // Configurar PDO para manejar errores como excepciones
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Conexión fallida: " . $e->getMessage());
        }
    }

    // Getter de la conexión
    protected function getConexion() {
        return $this->conexion;
    }

    // Método para cerrar la conexión (en PDO, la conexión se cierra automáticamente al destruir el objeto)
    public function cerrarConexion() {
        $this->conexion = null;
    }
}
?>
