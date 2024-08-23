<?php

class Reserva
{
    private $id; //Primary Key
    private $estado;
    private $fecha;
    private $hora_inicio; //Esto es del atributo "horario"
    private $hora_fin; //Esto es del atributo "horario"
    private $observaciones;


    public function __construct($id, $estado, $fecha, $hora_inicio, $hora_fin, $observaciones)
    {
        $this->id = $id;
        $this->estado = $estado;
        $this->fecha = $fecha;
        $this->hora_inicio = $hora_inicio;
        $this->hora_fin = $hora_fin;
        $this->observaciones = $observaciones;
    }

    // Getters
    public function getId()
    {
        return $this->id;
    }

    public function getEstado()
    {
        return $this->estado;
    }

    public function getFecha()
    {
        return $this->fecha;
    }

    public function getHoraInicio()
    {
        return $this->hora_inicio;
    }

    public function getHoraFin()
    {
        return $this->hora_fin;
    }

    public function getObservaciones()
    {
        return $this->observaciones;
    }

    // Setters
    public function setId($id)
    {
        $this->id = $id;
    }

    public function setEstado($estado)
    {
        $this->estado = $estado;
    }

    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    public function setHoraInicio($hora_inicio)
    {
        $this->hora_inicio = $hora_inicio;
    }

    public function setHoraFin($hora_fin)
    {
        $this->hora_fin = $hora_fin;
    }

    public function setObservaciones($observaciones)
    {
        $this->observaciones = $observaciones;
    }
}



?>