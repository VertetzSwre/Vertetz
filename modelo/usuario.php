<?php

class Usuario {
    private $ci; //Primary Key
    private $nombre_usuario;
    private $contraseña; 
    private $nombre_completo;
    private $telefono;
    private $mail_corporativo;
    private $mail_personal;
    private $foto_perfil;
    private $tipo_empleado;


    public function __construct($ci, $nombre_usuario, $contraseña, $nombre_completo, $telefono, $mail_corporativo, $mail_personal, $foto_perfil) {
        $this->ci = $ci;
        $this->nombre_usuario = $nombre_usuario;  
        $this->contraseña = $contraseña;
        $this->nombre_completo = $nombre_completo;
        $this->telefono = $telefono;
        $this->mail_corporativo = $mail_corporativo;
        $this->mail_personal = $mail_personal;
        $this->foto_perfil = $foto_perfil;
        $this->tipo_empleado = $tipo_empleado;
    }
}

// Getters
public function getCi() {
    return $this->ci;
}

public function getNombreUsuario() {
    return $this->nombre_usuario;
}

public function getContraseña() {
    return $this->contraseña;
}

public function getNombreCompleto() {
    return $this->nombre_completo;
}

public function getTelefono() {
    return $this->telefono;
}

public function getMailCorporativo() {
    return $this->mail_corporativo;
}

public function getMailPersonal() {
    return $this->mail_personal;
}

public function getFotoPerfil() {
    return $this->foto_perfil;
}

public function getTipoEmpleado() {
    return $this->tipo_empleado;
}

// Setters
public function setCi($ci) {
    $this->ci = $ci;
}

public function setNombreUsuario($nombre_usuario) {
    $this->nombre_usuario = $nombre_usuario;
}

public function setContraseña($contraseña) {
    $this->contraseña = $contraseña;
}

public function setNombreCompleto($nombre_completo) {
    $this->nombre_completo = $nombre_completo;
}

public function setTelefono($telefono) {
    $this->telefono = $telefono;
}

public function setMailCorporativo($mail_corporativo) {
    $this->mail_corporativo = $mail_corporativo;
}

public function setMailPersonal($mail_personal) {
    $this->mail_personal = $mail_personal;
}

public function setFotoPerfil($foto_perfil) {
    $this->foto_perfil = $foto_perfil;
}

public function setTipoEmpleado() {
    return $this->tipo_empleado;
}

?>

