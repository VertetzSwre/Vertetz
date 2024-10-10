function showNavbar() {
  const navbarHTML = `
<!--NAVBAR-->
  <header>        
    <nav class="navbar fixed-top" style="background-color: #8265C1;">
      <div class="container-fluid">

<!--NAVBAR BUTTON-->
        <button class="toggle-btn">☰</button>
        <a href="../../html/General/MainDashboard.html" style="position: absolute; left: 8rem;">
          <img src="../../img/Imagotipo-light.png" style="width: 4rem; height: 100%;">
        </a>
        <div class="d-flex align-items-center ms-auto">
          <span class="navbar-text me-2" style="color: white; font-family: 'Raleway', sans-serif; font-size: 1.5rem; font-weight: 700;">Usuario</span>
          <img src="../../img/usuario.png" style="width: 4rem; height: 4rem;">
        </div>
      </div>
    </nav>

<!--SIDEBAR-->
    <div class="sidebar">
      <hr>
        <a href="../../html/Reservas/CreateReserva.html">Nueva Reserva</a>
      <hr>

<!--DROPDOWN 1-->
   <div class="dropdown">
    <button class="dropdown-toggle">
      <span class="dropdown-icon"><img src="../../img/anadir.png" style="width: 1.7rem; height: 1.7rem;"></span>
      <span class="dropdown-text">Gestionar Reservas</span>
    </button>

<!--CONTENIDO DEL DROPDOWN 1-->
  <div class="dropdown-content">
    <ul>
      <li><a href="../../html/Reservas/CreateReserva.html">Crear reserva</a></li>
      <li><a href="../../html/Reservas/MyReservas.html">Mis reservas</a></li>
        <li><a href="../../html/Reservas/Calendar.html">Calendario</a></li>
      <li><a href="../../html/General/Help.html">Ayuda</a></li>
    </ul>
  </div>
</div>
<hr>

<!--DROPDOWN 2-->
<div class="dropdown">
  <button class="dropdown-toggle2">
    <span class="dropdown-icon2"><img src="../../img/anadir.png" style="width: 1.7rem; height: 1.7rem;"></span>
    <span class="dropdown-text2">Instituciones</span>
  </button>

<!--CONTENIDO DEL DROPDOWN 2-->
  <div class="dropdown-content2">
    <ul>
      <li><a href="pagina1.html">Administrar mis instituciones</a></li>
      <li><a href="../../html/Institucion/CreateInstitucion.html">Crear institucion</a></li>
      <li><a href="../../html/Institucion/JoinInstitucion.html">Unirme a una institucion</a></li>
      <li><a href="Help.html">Ayuda</a></li>
    </ul>
  </div>
</div>
<hr>
  </header>
`
  $('body').prepend(navbarHTML);
} //Ciere de etiqueta de la funcion "mostrarNavbar()".


$(document).ready(function () {
  showNavbar();

  //Funcion para abrir y cerrar el sidebar.
  $('.toggle-btn').on('click', function () {
    $('.sidebar').toggleClass('open');
    $('body').toggleClass('sidebar-open');
    $(this).text($('.sidebar').hasClass('open') ? '✕' : '☰');
  });

  //Funcion para desplegar el primer dropdown (gestionar reservas) con el boton de mas.
  $('.dropdown-icon').on('click', function (event) {
    event.stopPropagation(); // Evita que el click se propague al botón
    $('.dropdown-content').toggleClass('show');
  });

  //Funcion que redirige al usuario a la pagina de gestion de reservas al hacer click en el texto del dropdown.
  $('.dropdown-toggle').on('click', function (event) {
    if (!$(event.target).hasClass('dropdown-icon')) {
      window.location.href = '../../html/Reservas/ManageReserva.html';
    }
  });

  //Funcion para desplegar el segundo dropdown (gestionar instituciones) con el boton de mas.
  $('.dropdown-icon2').on('click', function (event) {
    event.stopPropagation(); // Evita que el click se propague al botón
    $('.dropdown-content2').toggleClass('show');
  });

  //Funcion que redirige al usuario a la pagina de gestion de instituciones al hacer click en el texto del dropdown.
  $('.dropdown-toggle2').on('click', function (event) {
    if (!$(event.target).hasClass('dropdown-icon2')) {
      window.location.href = 'gestionInstituciones.html';
    }
  });
});