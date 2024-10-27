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
            <button class="btn-edit-area" data-codigo="${res.codigo}" style="width: auto; height: auto; background-color: transparent; border: none;" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" ><img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 1rem;"></button>
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
            <img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 1rem;">
            <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;">
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

    //Cambiar la data de la info
    $('.section-usuario-data').css('display', 'flex');
    $('.section-area-data').css('display', 'none');

    //Cambiar el modal dependiendo si es area o reserva
    $('#add-area').css('display', 'none');
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
    $('#add-servicio').css('display', 'none');
  });
}

//Funcion que elimina un area en base a su codigo
function deleteArea(codigo) {
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

function deleteServicio(id_servicio) {
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

// Función para editar un área
function editArea() {
  $('#edit-area-form').submit(function (e) {
      e.preventDefault();

      let codigo = $('#edit-codigo').val();
      let nombre = $('#edit-nombre').val();
      let institucion = $('#edit-institucion').val();
      let estado = $('#edit-estado').val();

      if (codigo == "" || nombre == "" || institucion == "" || estado == "") {
          Swal.fire({
              icon: 'warning',
              title: '¡Atención!',
              text: 'Por favor, completa todos los campos requeridos para editar el área.',
              confirmButtonText: 'Entendido',
          });
      } else {
          $.ajax({
              url: '../../../../Controller/Area/AreaController.php',
              type: 'POST',
              data: {
                  action: 'update',
                  codigo: codigo,
                  nombre: nombre,
                  institucion: institucion,
                  estado: estado,
              },
              dataType: 'json',
              success: function (response) {
                  if (response.estado === 'exito') {
                      Swal.fire({
                          icon: 'success',
                          title: '¡Éxito!',
                          text: 'Has actualizado el área correctamente.',
                          showConfirmButton: false,
                          timer: 2000,
                      }).then(() => {
                          location.reload();
                      });
                  } else {
                      Swal.fire({
                          icon: 'error',
                          title: 'Error',
                          text: 'No se pudo actualizar el área. Por favor, inténtalo nuevamente.',
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

// Llamar a la función para manejar la edición del área
editArea();

});//Cierre de la funcion ready

