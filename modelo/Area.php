<?php

class Area
{
    private $codigo; //Primary Key
    private $institucion_perteneciente;
    private $nombre;
    private $tipo;
    private $estado;

    public function __construct($codigo, $institucion_perteneciente, $nombre, $tipo, $estado)
    {
        $this->codigo = $codigo;
        $this->institucion_perteneciente = $institucion_perteneciente;
        $this->nombre = $nombre;
        $this->tipo = $tipo;
        $this->estado = $estado;
    }


    // Getters
    public function getCodigo()
    {
        return $this->codigo;
    }

    public function getInstitucionPerteneciente()
    {
        return $this->institucion_perteneciente;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function getTipo()
    {
        return $this->tipo;
    }

    public function getEstado()
    {
        return $this->estado;
    }

    // Setters
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;
    }

    public function setInstitucionPerteneciente($institucion_perteneciente)
    {
        $this->institucion_perteneciente = $institucion_perteneciente;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    public function setEstado($estado)
    {
        $this->estado = $estado;
    }
}
?>