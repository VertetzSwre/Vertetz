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
<hr>
      <a href="crearReserva.html">Nueva Reserva</a>
      <hr>
   <div class="dropdown">
  <button class="dropdown-toggle">
    <span class="dropdown-icon"><img src="img/anadir.png" style="width: 2rem; height: 2rem;"></span>
    <span class="dropdown-text">Gestionar Reservas</span>
  </button>
  <div class="dropdown-content">
    <ul>
      <li><a href="crearReserva.html">Crear reserva</a></li>
      <li><a href="misReservas.html">Mis reservas</a></li>
      <li><a href="calendario.html">Calendario</a></li>
      <li><a href="ayuda.html">Ayuda</a></li>
    </ul>
  </div>
</div>
<hr>
<div class="dropdown">
  <button class="dropdown-toggle2">
    <span class="dropdown-icon2"><img src="img/anadir.png" style="width: 2rem; height: 2rem;"></span>
    <span class="dropdown-text">Grupos</span>
  </button>
  <div class="dropdown-content2">
    <ul>
      <li><a href="pagina1.html">Primaria impulso</a></li>
      <li><a href="pagina2.html">Secundaria impulso</a></li>
    </ul>
  </div>
</div>
<hr>
  </header>
`
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
;

document.querySelector('.dropdown-icon').addEventListener('click', function(event) {
  event.stopPropagation(); // Evita que el clic se propague al botón
  document.querySelector('.dropdown-content').classList.toggle('show');
});

document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
  if (!event.target.classList.contains('dropdown-icon')) {
      window.location.href = 'gestionReservas.html'; // Cambia esto a la URL deseada
  }
});


document.querySelector('.dropdown-icon2').addEventListener('click', function(event) {
  event.stopPropagation(); // Evita que el clic se propague al botón
  document.querySelector('.dropdown-content2').classList.toggle('show');
});



//Funcion para abrir y cerrar el sidebar
const toggleBtn = document.querySelector('.toggle-btn');
  const sidebar = document.querySelector('.sidebar');
  toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      document.body.classList.toggle('sidebar-open');
      toggleBtn.textContent = sidebar.classList.contains('open') ? '✕' : '☰';
  });

}

  
