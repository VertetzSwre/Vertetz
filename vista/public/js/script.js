function mostrarNavbar() {
    const navbarHTML = `
    <header>        
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <!--NAV BUTTON-->
          <button class="toggle-btn">☰</button>
          <a href="pestañaPrincipal.html" style="position: absolute; left: 8rem;">
            <img src="img/Imagotipo.png" style="width: 4rem; height: 100%;">
          </a>
          <div class="d-flex align-items-center ms-auto">
            <span class="navbar-text me-2" style="color: white; font-family: 'Raleway', sans-serif; font-size: 1.5rem; font-weight: 700;">Username</span>
            <img src="img/usuario.png" style="width: 4rem; height: 4rem;">
          </div>
        </div>
      </nav>
      <div class="sidebar">
        <a href="crearReserva.html">Nueva Reserva</a>
        <div class="dropdown">
          <div class="dropdown-toggle">Gestionar Reservas</div>
          <div class="dropdown-content">
            <a href="crearReserva.html">Nueva Reserva</a>
            <a href="misReservas.html">Mis Reservas</a>
            <a href="calendario.html">Calendario</a>
            <a href="ayuda.html">Ayuda</a>
          </div>
        </div>
        <div class="dropdown">
          <div class="dropdown-toggle">Grupos</div>
          <div class="dropdown-content">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
          </div>
        </div>
      </div>
    </header>
`;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        document.body.classList.toggle('sidebar-open');
        toggleBtn.textContent = sidebar.classList.contains('open') ? '✕' : '☰';
    });

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdown = this.parentElement;
            dropdown.classList.toggle('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', mostrarNavbar);