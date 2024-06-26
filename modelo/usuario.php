<?php

class Usuario {
    private $nombre; //Primary Key
    private $contraseña; //Primary Key

    public function __constructor($nombre, $contraseña) {
        $this->nombre = $nombre; 
        $this->nombre = $contraseña;
    }
}

class Empleado {
    private $nombre; //Primary Key
    private $contraseña; //Primary Key

    public function __constructor($nombre, $contraseña) {
        $this->nombre = $nombre;
        $this->nombre = $contraseña;
    }
}

class Administrador {
    private $nombre; //Primary Key
    private $contraseña; //Primary Key

    public function __constructor($nombre, $contraseña) {
        $this->nombre = $nombre;
        $this->nombre = $contraseña;
    }
}

class Reserva {
    private $id; //Primary Key
    private $fecha;
    private $hora_inicio;
    private $hora_fin;

    public function __constructor($id, $hora_inicio, $hora_fin) {
        $this->id = $id;
        $this->fecha = $fecha;
        $this->hora_inicio = $hora_inicio;
        $this->hora_fin = $hora_fin;
    }
}

class Servicio {
    private $nombre; //Primary Key

    public function __constructor($nombre) {
        $this->nombre = $nombre;
    }
}

class Tiene {
    private $cantidad;
    private $observaciones; //Esto es multivaluado.

    public function __constructor($cantidad, $observaciones) {
        $this->cantidad = $cantidad;
        $this->observaciones = $observaciones;    
    }
}

class Institucion {
    private $nombre; //Primary Key
    private $calle;
    private $esquina;
    private $puerta;

    public function __constructor($nombre, $calle, $esquina, $puerta) {
        $this->nombre = $nombre;
        $this->calle = $calle;
        $this->esquina = $esquina;
        $this->puerta = $puerta;
    }
}

class Area {
    private $codigo; //Primary Key
    private $nombre;

    public function __constructor($codigo, $nombre) {
        $this->codigo = $codigo;
        $this->nombre = $nombre;
    }
}

?>

