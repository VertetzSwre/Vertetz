<?php

class Institucion
{
    private $nombre; // Primary Key
    private $calle; // Esto es del atributo compuesto "direccion"
    private $esquina; // Esto es del atributo compuesto "direccion"
    private $puerta; // Esto es del atributo compuesto "direccion"
    private $email; // Esto es del atributo multivaluado "datos_de_contacto"
    private $telefono; // Esto es del atributo multivaluado "datos_de_contacto"

    public function __construct($nombre, $calle, $esquina, $puerta, $email, $telefono)
    {
        $this->nombre = $nombre;
        $this->calle = $calle;
        $this->esquina = $esquina;
        $this->puerta = $puerta;
        $this->email = $email;
        $this->telefono = $telefono;
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
}
?>
