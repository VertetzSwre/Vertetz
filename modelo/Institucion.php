<?php

class Institucion {
    private $nombre; // Primary Key
    private $calle; // Atributos del compuesto "direccion"
    private $esquina; // Atributos del compuesto "direccion"
    private $puerta; // Atributos del compuesto "direccion"
    private $email; // Atributos del multivaluado "datos_de_contacto"
    private $telefono; // Atributos del multivaluado "datos_de_contacto"

    // Constructor
    public function __construct($nombre, $calle, $esquina, $puerta, $email, $telefono) {
        $this->nombre = $nombre;
        $this->calle = $calle;
        $this->esquina = $esquina;
        $this->puerta = $puerta;
        $this->email = $email;
        $this->telefono = $telefono;
    }

    // Getters
    public function getNombre() {
        return $this->nombre;
    }

    public function getCalle() {
        return $this->calle;
    }

    public function getEsquina() {
        return $this->esquina;
    }

    public function getPuerta() {
        return $this->puerta;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getTelefono() {
        return $this->telefono;
    }

    // Setters
    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setCalle($calle) {
        $this->calle = $calle;
    }

    public function setEsquina($esquina) {
        $this->esquina = $esquina;
    }

    public function setPuerta($puerta) {
        $this->puerta = $puerta;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function setTelefono($telefono) {
        $this->telefono = $telefono;
    }
}

?>
