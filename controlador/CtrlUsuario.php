<?php

require_once 'modelo/usuario.php';

class controladorUsuario {
    private $modeloUsuario;

    public function __construct() {
        $this->modeloUsuario = new Usuario();
    }
    
    public function mostrarLogin() {
        include 'vista/public/login.html';
    }
    
    public function login() {
        
    }
}



?>
