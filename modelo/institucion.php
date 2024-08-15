<?php

class Institucion {
    private $nombre; //Primary Key
    private $calle; //Esto es del atributo compuesto "direccion"
    private $esquina; //Esto es del atributo compuesto "direccion"
    private $puerta; //Esto es del atributo compuesto "direccion"
    private $email; //Esto es del atributo multivaluado "datos_de_contacto"
    private $telefono; //Esto es del atributo multivaluado "datos_de_contacto"

    public function __construct($nombre, $calle, $esquina, $puerta, $datos_de_contacto) {
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

    public function getDatosDeContacto() {
        return $this->datos_de_contacto;
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

    public function setDatosDeContacto($datos_de_contacto) {
        $this->datos_de_contacto = $datos_de_contacto;
    }

    public function setEmail() {
        return $this->email;
    }

    public function setTelefono() {
        return $this->telefono;
    }
?>