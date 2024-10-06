<?php
require_once 'Conexion.php';
class Tiene extends Conexion
{
    private $id_servicio; //Primary Key
    private $cantidad;

    public function __construct()
    {
        parent::__construct(); // Llamada al constructor de la clase base
    }

    // Getters
    public function getIdServicio()
    {
        return $this->id_servicio;
    }

    public function getCantidad()
    {
        return $this->cantidad;
    }

    // Setters
    public function setIdServicio($id_servicio)
    {
        $this->id_servicio = $id_servicio;
    }

    public function setCantidad($cantidad)
    {
        $this->cantidad = $cantidad;
    }

    public function registrarTiene($id_servicio, $cantidad)
{
    $conn = $this->getConexion();

    try {
        $sql = "INSERT INTO tiene 
                (id_servicio, cantidad) 
                VALUES 
                (:id_servicio, :cantidad)";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':id_servicio', $id_servicio, PDO::PARAM_INT);
        $stmt->bindParam(':cantidad', $cantidad, PDO::PARAM_INT);

        $stmt->execute();

        return ['estado' => 'Registro exitoso!'];
    } catch (PDOException $e) {
        return [
            'estado' => 'Error al registrar tiene.',
            'error' => $e->getMessage()
        ];
    } finally {
        $this->cerrarConexion();
    }
}
}
?>