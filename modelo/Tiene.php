<?php

class Institucion {
    private $id_servicio; //Primary Key
    private $cantidad;

    public function __construct($id_servicio, $cantidad) {
        $this->id_servicio = $id_servicio;
        $this->cantidad = $cantidad;
    }

    // Getters
    public function getIdServicio() {
        return $this->id_servicio;
    }

    public function getCantidad() {
        return $this->cantidad;
    }

    // Setters
    public function setIdServicio($id_servicio) {
        $this->id_servicio = $id_servicio;
    }

    public function setCantidad($cantidad) {
        $this->cantidad = $cantidad;
    }
}
?>