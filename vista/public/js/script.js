function mostrarNavbar() { //Esta funcion es reutilizable, se usa para cada HTML que requiera un navbar.
    const navbarHTML = `
    <header>        
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid justify-content-none">
                <!--NAV BUTTON-->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" style="width: 5rem; height: 5rem; display: grid; place-content: center;">
                    <span class="navbar-toggler-icon" style="background-image: url('../public/img/img-menuHamburguesa.png'); width: 4rem; height: 4rem;"></span>
                </button>
                <a href="pestañaPrincipal.html" style="position: absolute; left: 8rem;"><img src="img/Imagotipo.png" style="width: 4rem; height: 100%;"></a>
                <div class="d-flex align-items-center ms-auto">
                    <span class="navbar-text me-2" style="color: white; font-family: 'Raleway', sans-serif; font-size: 1.5rem; font-weight: 700;">Username</span>
                    <img src="img/usuario.png" style="width: 4rem; height: 4rem;">
                </div>
                <!--OFFCANVAS MAIN CONTAINER START-->
                <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="menuLateral">
                    <div class="offcanvas-header" style="background-color: #000;">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" style="width: 5rem; height: 5rem; display: grid; place-content: center;">
                            <span class="navbar-toggler-icon" style="background-image: url('../public/img/img-menuHamburguesa.png'); width: 4rem; height: 4rem;"></span>
                        </button>
                    </div>
                    <!--OFFCANVAS MENU LINKS START-->
                    <div class="offcanvas-body d-flex flex-column justify-content-center px-0-auto" style="background-color: #000;">
                        <ul class="navbar-nav fs-2 justify-content-evenly">
                            <li class="nav-item p3 py-md-1"><a href="crearReserva.html" class="nav-link">Nueva Reserva</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-plus" style="margin-right: 0.5rem;"></i> Gestionar Reservas
                                </a>
                                <ul class="dropdown-menu">
                                    <li style="list-style: disc;"><a class="dropdown-item" href="crearReserva.html">Crear Reserva</a></li>
                                    <li style="list-style: disc;"><a class="dropdown-item" href="misReservas.html">Mis Reservas</a></li>
                                    <li style="list-style: disc;"><a class="dropdown-item" href="calendario.html">Calendario</a></li>
                                    <li style="list-style: disc;"><a class="dropdown-item" href="ayuda.html">Ayuda</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-plus" style="margin-right: 0.5rem;"></i> Grupos
                                </a>
                                <ul class="dropdown-menu">
                                    <li style="list-style: disc;"><a class="dropdown-item" href="#">Secundaria Impulso</a></li>
                                    <li style="list-style: disc;"><a class="dropdown-item" href="#">Primaria Impulso</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}