$(document).ready(function () {

  //Oculta la lista de todos los servicios, asi como su informacion
  $('.section-services-list').css('display', 'none');
  $('.section-usuario-data').css('display', 'none');
  $('#add-servicio').css('display', 'none');

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

  // Función genérica para realizar solicitudes AJAX
function ajaxRequest(action, data, callback) {
  $.ajax({
    url: "../../../../Controller/Institucion/InstitucionController.php",
    type: "POST",
    data: { action: action, ...data },
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
            <button class="btn-edit-area" data-codigo="${res.codigo}" data-nombre="${res.nombre}" data-estado="${res.estado}" data-institucion="${res.institucion}" style="width: auto; height: auto; background-color: transparent; border: none;" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" ><img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 1rem;"></button>
            <button class="btn-delete-area" data-codigo="${res.codigo}" style="width: auto; height: auto; background-color: transparent; border: none;"><img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;"></button>
          </div>
        </div>`);
      sectionAreaList.append(sectionGetAreas);
    });


    // Asociar el evento click a los botones de eliminación
    $('.btn-delete-area').on('click', function () {
      const codigo = $(this).data('codigo');
      deleteArea(codigo);
    });

    
  });
}

// Asociar el evento click a los botones de edición
$(document).on('click', '.btn-edit-area', function () {
  const codigo = $(this).data('codigo');
  const nombre = $(this).data('nombre');
  const estado = $(this).data('estado');
  const institucion = $(this).data('institucion');
  editArea(codigo, nombre, estado);
});

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
            <button class="btn-delete-usuario" data-ci="${res.ci}" style="width: auto; height: auto; background-color: transparent; border: none;"><img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;"></button>
          </div>
        </div>`);
      sectionUsersList.append(sectionGetUsers);
    });
    // Asociar el evento click a los botones de eliminación
    $('.btn-delete-usuario').on('click', function () {
      const ci = $(this).data('ci');
      deleteUsuario(ci);
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
            <img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 1rem;">
            <button class="btn-delete-servicio" data-id_servicio="${res.id_servicio}" style="width: auto; height: auto; background-color: transparent; border: none;"><img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;"></button>
          </div>
        </div>`);
      sectionServicesList.append(sectionGetServices);
    });

    // Asociar el evento click a los botones de eliminación
    $('.btn-delete-servicio').on('click', function () {
      const id_servicio = $(this).data('id_servicio');
      deleteServicio(id_servicio);
    });
  });
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

function sortDates(dates) {
  return dates.sort((a, b) => {
      const [dayA, monthA, yearA] = a.split("/").map(Number);
      const [dayB, monthB, yearB] = b.split("/").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA - dateB;
  });
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`;
}

function getReservas(nombre) {
  ajaxRequest("ReservasByInstitucion", { nombre }, function (response) {
    $('#container-reservas').prepend(`<h1 class="h1-reservas-institucion">Gestiona las reservas de ${nombre}</h1>`);
    const sectionReservationList = $('.section-reservation-list').empty();

    // Convertir y ordenar las fechas
    response.forEach(res => {
      res.fecha = formatDate(res.fecha);
      res.hora_inicio = formatTime(res.hora_inicio);
      res.hora_fin = formatTime(res.hora_fin);
    });
    response.sort((a, b) => {
      const [dayA, monthA, yearA] = a.fecha.split("/").map(Number);
      const [dayB, monthB, yearB] = b.fecha.split("/").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA - dateB;
    });

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
             <button class="btn-edit-reserva" style="width: auto; height: auto; background-color: transparent; border: none;" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" ><img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 1rem;"></button>
            <button class="btn-delete-reserva" data-reserva="${res.id}" style="width: auto; height: auto; background-color: transparent; border: none;"><img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;"></button> 
          </div>
        </div>`);
      sectionReservationList.append(sectionGetReservation);
    });
    // Asociar el evento click a los botones de eliminación de reserva
  $('.btn-delete-reserva').on('click', function() {
    const id = $(this).data('reserva');
    deleteReserva(id);
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

    //Cambiar la data de la info
    $('.section-usuario-data').css('display', 'flex');
    $('.section-area-data').css('display', 'none');

    //Cambiar el modal dependiendo si es area o reserva
    $('#add-area').hide();
    $('#add-servicio').css('display', 'inline');
  });

  $(".btn-change-area").on("click", function () {
    $(".section-area-list").show();
    $(".section-services-list").hide();
    $(".btn-change-area").addClass("btn-selected");
    $(".btn-change-servicios").removeClass("btn-selected");

    //Cambiar la data de la info
    $('.section-usuario-data').css('display', 'none');
    $('.section-area-data').css('display', 'flex');

    //Cambiar el modal dependiendo si es area o reserva
    $('#add-area').css('display', 'inline');
    $('#add-servicio').hide();
  });
}

//Funcion que elimina un area en base a su codigo
function deleteArea(codigo) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarla',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

      $.ajax({
        url: '../../../../Controller/Area/AreaController.php',
        type: 'POST',
        data: {
            action: 'delete',
            codigo: codigo,
        },
        dataType: 'json',
        success: function (response) {
            if (response.estado === 'exito') {
              Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Has eliminado el área correctamente.',
                showConfirmButton: false,
                timer: 2000,
              }).then(() => {
                window.location.reload();
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar el área. Por favor, inténtalo nuevamente.',
              });
            }
        },
        error: function (xhr, status, error) {
            console.error('Error en la solicitud AJAX:', status, error);
            console.error('Respuesta del servidor:', xhr.responseText);
        }
      });
    }
  });
}

function deleteServicio(id_servicio) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarla',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
  $.ajax({
    url: '../../../../Controller/Servicio/ServicioController.php',
    type: 'POST',
    data: {
      action: 'delete',
      id_servicio: id_servicio,
    },
    dataType: 'json',
    success: function (response) {
      if (response.estado === 'Eliminación exitosa!') {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Has eliminado el servicio correctamente.',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo eliminar el servicio. Por favor, inténtalo nuevamente.',
        });
      }
    },
    error: function (xhr, status, error) {
      console.error('Error en la solicitud AJAX:', status, error);
      console.error('Respuesta del servidor:', xhr.responseText);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.',
      });
    }
  });
}
  });
}

function deleteReserva(id) { 
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarla',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
  $.ajax({
    url: '../../../../Controller/Reserva/ReservaController.php',
    type: 'POST',
    data: {
      action: 'delete',
      id: id,
    },
    dataType: 'json',
    success: function (response) {
      if (response.estado === 'Reserva eliminada con éxito!') {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Has eliminado la reserva correctamente.',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo eliminar la reserva. Por favor, inténtalo nuevamente.',
        });
      }
    },
    error: function (xhr, status, error) {
      console.error('Error en la solicitud AJAX:', status, error);
      console.error('Respuesta del servidor:', xhr.responseText);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.',
      });
    }
  });
}
  });
}


function deleteUsuario(ci) { 
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarla',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
  $.ajax({
    url: '../../../../Controller/Usuario/UsuarioController.php',
    type: 'POST',
    data: {
      action: 'delete',
      ci: ci,
    },
    dataType: 'json',
    success: function (response) {
      if (response.estado === 'Eliminación exitosa!') {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Has eliminado el usuario correctamente.',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo eliminar el usuario. Por favor, inténtalo nuevamente.',
        });
      }
    },
    error: function (xhr, status, error) {
      console.error('Error en la solicitud AJAX:', status, error);
      console.error('Respuesta del servidor:', xhr.responseText);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.',
      });
    }
  });
}
  });
}

function editArea(codigo, nombre, estado) {
  $('#edit-codigo').val(codigo);
  $('#edit-nombre').val(nombre);
  $('#edit-estado').val(estado);
  console.log(codigo, nombre, estado);
  
  $('#edit-area-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      url: '../../../../Controller/Area/AreaController.php',
      type: 'POST',
      data: {
        action: 'update',
        codigo: $('#edit-codigo').val(),
        nombre: $('#edit-nombre').val(),
        estado: $('#edit-estado').val(),
      },
      dataType: 'json',
      success: function(response) {
        if (response.estado === 'exito') {
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Has actualizado el área correctamente.',
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            $('#exampleModalToggle2').modal('hide');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo actualizar el área. Por favor, inténtalo nuevamente.',
          });
        }
      },
      error: function(xhr, status, error) {
        console.error('Error en la solicitud AJAX:', status, error);
        console.error('Respuesta del servidor:', xhr.responseText);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.',
        });
      }
    });
  });
 
}
});//Cierre de la funcion ready



