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
    <div class="sidebar closed">
        <ul>
          <li>
            <a href="../../html/Reservas/CreateReserva.html">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              <span class="text">Nueva Reserva</span>
            </a>
          </li>
          <button class="dropdown-btn" onclick=toggleSubMenu(this)>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-200v-80h400v80H80Zm0-200v-80h200v80H80Zm0-200v-80h200v80H80Zm744 400L670-354q-24 17-52.5 25.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 29-8.5 57.5T726-410l154 154-56 56ZM560-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
              <span class="text">Reservas</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </button>
            <ul class="sub-menu">
             <li><a href="../../html/Reservas/CreateReserva.html">Crear reserva</a></li>
              <li><a href="../../html/Reservas/MyReservas.html">Mis reservas</a></li>
              <li><a href="../../html/Reservas/ManageReserva.html">Gestionar reservas</a></li>
              <li><a href="../../html/Reservas/Calendar.html">Calendario</a></li>
              <li><a href="../../html/General/Help.html">Ayuda</a></li>
            </ul>
          </li>
           <button class="dropdown-btn" onclick=toggleSubMenu(this)>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
              <span class="text">Instituciones</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360 280-560h400L480-360Z"/></svg>
            </button>
            <ul class="sub-menu">
             <li><a href="../../html/Institucion/ManageInstitucion.html">Administrar mis instituciones</a></li>
              <li><a href="../../html/Institucion/CreateInstitucion.html">Crear institucion</a></li>
              <li><a href="../../html/Institucion/JoinInstitucion.html">Unirme a una institucion</a></li>
            </ul>
          </li>
        </ul>
        </ul>
           
      </div>
<hr>
  </header>
`
  $('body').prepend(navbarHTML);
}

$(document).ready(function () {
  showNavbar();

  // Función para abrir y cerrar el sidebar.
  $('.toggle-btn').on('click', function () {
    $('.sidebar').toggleClass('open closed'); //Funcion que cambia de clase de la sidebar

    $('body').toggleClass('sidebar-open');//Funcion que cambia de clase del body
    $(this).text($('.sidebar').hasClass('open') ? '✕' : '☰');
  });

  // Función para desplegar el submenú.
  $('.dropdown-btn').on('click', function () {
    $(this).next('.sub-menu').toggleClass('show');
    $(this).toggleClass('rotate'); // Añade la rotación a la flecha
  });
});