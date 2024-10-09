<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Connection {
    private $conn;

    public function __construct() {
        try {
            // Establecer la conexión
            $this->conn = new PDO('mysql:host=localhost;dbname=vertetz_roomanagy', 'root', '');
            // Configurar PDO para manejar errores como excepciones
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Conexión fallida: " . $e->getMessage());
        }
    }

    // Getter de la conexión
    protected function getConnection() {
        return $this->conn;
    }

    // Método para cerrar la conexión (en PDO, la conexión se cierra automáticamente al destruir el objeto)
    public function closeConnection() {
        $this->conn = null;
    }
}
?>
