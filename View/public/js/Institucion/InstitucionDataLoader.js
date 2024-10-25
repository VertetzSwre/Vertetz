$(document).ready(function () {
  // Obtener el id del div almacenado en LocalStorage
  const selectedDivId = localStorage.getItem("selectedDivId");

  if (selectedDivId) {
    console.log("ID del div seleccionado:", selectedDivId);
    fetchInstitucionData(selectedDivId);
    toggleSection();
  } else {
    console.error("No se encontró el id del div seleccionado.");
  }

  // Borrar el LocalStorage cuando se finaliza la acción
  $("#finalizarAccion").on("click", function () {
    localStorage.removeItem("selectedDivId");
  });
});

// Función genérica para realizar solicitudes AJAX
function ajaxRequest(action, data, callback) {
  $.ajax({
    url: "../../../../Controller/Institucion/InstitucionController.php",
    type: "POST",
    data: { action, ...data },
    dataType: "json",
    success: callback,
    error: function (xhr, status, error) {
      console.error(`Error en la solicitud AJAX para ${action}:`, status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
}

// Obtener y cargar datos de la institución
function fetchInstitucionData(id) {
  ajaxRequest("instituciones", {}, function (response) {
    const institucion = response[id];
    if (institucion) {
      const institucionName = institucion.nombre;
      getUsuarios(institucionName);
      getAreas(institucionName);
      getServicios(institucionName);
      getReservas(institucionName);
    } else {
      console.error("La institución con el id proporcionado no existe.");
    }
  });
}

// Funciones para obtener datos específicos de la institución
function getAreas(nombre) {
  ajaxRequest("AreasByInstitucion", { nombre }, function (response) {
    $('#container-areas-servicios').prepend(`<h1 class="h1-todas-las-reservas">Gestiona las áreas y servicios de ${nombre}</h1>`);
    const sectionAreaList = $(".section-area-list").empty();
    response.forEach((res) => {
      const sectionGetAreas = $(`
        <div class="section-get-areas">
          <div id="area-item">
            <p>${res.codigo}</p>
            <p>${res.nombre}</p>
            <p>${res.estado}</p>
            <img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
            <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
          </div>
        </div>`);
      sectionAreaList.append(sectionGetAreas);
    });
  });
}

function getUsuarios(nombre) {
  ajaxRequest("UsuariosByInstitucion", { nombre }, function (response) {
    $('#container-usuarios').prepend(`<h1 class="h1-todas-las-reservas">Gestiona los usuarios de ${nombre}</h1>`);
    const sectionUsersList = $(".section-users-list").empty();
    response.forEach((res) => {
      const sectionGetUsers = $(`
        <div class="section-user-list">
          <div id="users-item">
            <p>${res.ci}</p>
            <p>${res.contrasena}</p>
            <p>${res.nombre_completo}</p>
            <p>${res.mail_personal}</p>
            <p>${res.telefono}</p>
            <p>${res.mail_corporativo}</p>
            <p>${res.tipo_Empleado}</p>
          </div>
        </div>`);
      sectionUsersList.append(sectionGetUsers);
    });
  });
}

function getServicios(nombre) {
  ajaxRequest("ServiciosByInstitucion", { nombre }, function (response) {
    const sectionServicesList = $(".section-services-list").empty();
    response.forEach((res) => {
      const sectionGetServices = $(`
        <div class="section-get-services">
          <div id="service-item">
            <p>${res.id_servicio}</p>
            <p>${res.tipo_servicio}</p>
            <p>${res.descripcion}</p>
            <img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
            <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
          </div>
        </div>`);
      sectionServicesList.append(sectionGetServices);
    });
  });
}

function getReservas(nombre) {
  ajaxRequest("ReservasByInstitucion", { nombre }, function (response) {
    $('#container-reservas').prepend(`<h1 class="h1-reservas-institucion">Gestiona las reservas de ${nombre}</h1>`);
    const sectionReservationList = $('.section-reservation-list').empty();
    response.forEach((res) => {
      const sectionGetReservation = $(`
        <div class="section-get-reservation">
          <div id="reservation-item">
            <p>${res.id}</p>
            <p>${res.estado}</p>
            <p>${res.fecha}</p>
            <p>${res.hora_inicio}</p>
            <p>${res.hora_fin}</p>
            <p>${res.observaciones}</p>
            <p>${res.codigo_area}</p>
          </div>
        </div>`);
      sectionReservationList.append(sectionGetReservation);
    });
  });
}

// Función para alternar entre las secciones 'Área' y 'Servicios'
function toggleSection() {
  $(".section-area-list").show();
  $(".section-services-list").hide();
  $(".btn-change-area").addClass("btn-selected");
  $(".btn-change-servicios").removeClass("btn-selected");

  $(".btn-change-servicios").on("click", function () {
    $(".section-area-list").hide();
    $(".section-services-list").show();
    $(".btn-change-area").removeClass("btn-selected");
    $(".btn-change-servicios").addClass("btn-selected");

    $(".section-usuario-data").show();
    $(".section-area-data").hide();
  });

  $(".btn-change-area").on("click", function () {
    $(".section-area-list").show();
    $(".section-services-list").hide();
    $(".btn-change-area").addClass("btn-selected");
    $(".btn-change-servicios").removeClass("btn-selected");

    $(".section-usuario-data").hide();
    $(".section-area-data").show();
  });
}
