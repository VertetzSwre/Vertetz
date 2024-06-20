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

class Institucion {
    private $nombre; //Primary Key
    private $grupo;

    public function __constructor($nombre, $grupo) {
        $this->nombre = $nombre;
        $this->grupo = $grupo;
    }
}

class Area_Comun {
    private $codigo; //Primary Key
    private $nombre;

    public function __constructor($codigo, $nombre) {
        $this->codigo = $codigo;
        $this->nombre = $nombre;
    }
}

class Item_Servicio {
    private $nombre; //Primary Key
    private $cantidad;
    private $observaciones; //Esto es multivaluado.

    public function __constructor($nombre, $cantidad, $observaciones) {
        $this->nombre = $nombre;
        $this->cantidad = $cantidad;
        $this->observaciones = $observaciones;
    }
}

?>

