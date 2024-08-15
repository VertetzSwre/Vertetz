<?php

class Servicio {
    private $id_servicio; //Primary Key
    private $nombre;
    private $tipo_servicio;
    private $descripcion;

    public function __construct($id_servicio, $nombre, $tipo_servicio, $descripcion) {
        $this->id_servicio = $id_servicio; 
        $this->nombre = $nombre;
        $this->tipo_servicio = $tipo_servicio;
        $this->descripcion = $descripcion;
    }
}

 // Getters
 public function getIdServicio() {
    return $this->id_servicio;
}

public function getNombre() {
    return $this->nombre;
}

public function getTipoServicio() {
    return $this->tipo_servicio;
}

public function getDescripcion() {
    return $this->descripcion;
}

// Setters
public function setIdServicio($id_servicio) {
    $this->id_servicio = $id_servicio;
}

public function setNombre($nombre) {
    $this->nombre = $nombre;
}

public function setTipoServicio($tipo_servicio) {
    $this->tipo_servicio = $tipo_servicio;
}

public function setDescripcion($descripcion) {
    $this->descripcion = $descripcion;
}

?>


