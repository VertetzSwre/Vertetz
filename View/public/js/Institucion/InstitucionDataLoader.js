$(document).ready(function () {
  // * Oculta la lista de todos los servicios y la información de usuarios inicialmente
  $(".section-services-list, .section-usuario-data, #add-servicio").hide();

  let idInstitucion;
  const selectedDivId = localStorage.getItem("selectedDivId");

  if (selectedDivId) {
    console.log("ID del div seleccionado:", selectedDivId);
    fetchInstitucionData(selectedDivId);
    toggleSection();
  } else {
    console.error("No se encontró el id del div seleccionado.");
  }

  // * Borrar LocalStorage al finalizar la acción
  $("#finalizarAccion").on("click", function () {
    localStorage.removeItem("selectedDivId");
  });

  // * Mostrar modal para crear área
  $("#add-area").on("click", function () {
    $("#createAreaModal").modal("show");
  });

  // * Mostrar modal para crear servicio
  $("#add-servicio").on("click", function () {
    $("#createServicioModal").modal("show");
  });

  // * Obtener los datos del area y mostrar modal para editarla
  $(document).on("click", ".btn-edit-area", function () {
    //Obtener valores de el area a editar
    const codigo = $(this).data("codigo");
    const nombre = $(this).data("nombre");
    const estado = $(this).data("estado");

    //Insertar los valores del area en los campos del modal
    $("#edit-codigo").val(codigo);
    $("#edit-nombre").val(nombre);
    $("#edit-estado").val(estado);
    $("#save-area-changes").data("codigo", codigo);
    $("#editAreaModal").modal("show");
  });

  // * Obtener los datos del servicio y mostrar modal para editarlo
  $(document).on("click", ".btn-edit-servicio", function () {
    const tipoServicio = $(this).data("tipo_servicio");
    const descripcion = $(this).data("descripcion");

    $("#edit-tipo-servicio").val(tipoServicio);
    $("#edit-descripcion-servicio").val(descripcion);
    $("#editServicioModal").modal("show");
  });

  // ! Evento que contiene el muestreo de los modals
  $(document).ready(function () {

    // * Enviar formulario de Crear Área
    $("#create-area-form").on("submit", function (e) {
      e.preventDefault();
      const formData = {
        action: "create",
        nombre: $("#nombre").val(),
        estado: $("#estado").val(),
      };

      $.ajax({
        url: "../../../../Controller/Area/AreaController.php",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function (response) {
          console.log("Área creada:", response);
          $("#createAreaModal").modal("hide");
          getAreas(localStorage.getItem("selectedDivId"));
        },
        error: function (xhr, status, error) {
          console.error("Error al crear el área:", status, error);
          console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    });

    // * Enviar formulario de Crear Reserva
    $("#form-create-reserva").on("submit", function (e) {
      e.preventDefault();
      const formData = {
        action: "create",
        nombre_institucion: $("#instituto").val(),
        area: $("#area").val(),
        fecha: $("#fecha_reserva").val(),
        hora_inicio: $("#hora_reserva_desde").val(),
        hora_fin: $("#hora_reserva_hasta").val(),
        servicio: $("#servicio").val(),
        observaciones: $("#observaciones").val(),
      };

      $.ajax({
        url: "../../../../Controller/Reserva/ReservaController.php",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function (response) {
          console.log("Reserva creada:", response);
          getAreas(localStorage.getItem("selectedDivId"));
        },
        error: function (xhr, status, error) {
          console.error("Error al crear el área:", status, error);
          console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    });

    // * Enviar formulario de Crear Servicio
    $("#create-servicio-form").on("submit", function (e) {
      e.preventDefault();
      const formData = {
        action: "create",
        tipo_servicio: $("#tipo_servicio").val(),
        descripcion: $("#descripcion_servicio").val(),
      };

      $.ajax({
        url: "../../../../Controller/Servicio/ServicioController.php",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function (response) {
          console.log("Servicio creado:", response);
          $("#createServicioModal").modal("hide");
          getServicios(localStorage.getItem("selectedDivId"));
        },
        error: function (xhr, status, error) {
          console.error("Error al crear el servicio:", status, error);
          console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    });

     // * Enviar formulario de Editar Area
     $("#edit-servicio-form").on("submit", function (e) {
      e.preventDefault();
      const formData = {
        action: "update",
        codigo: $("#edit-area-form").data("codigo"),
        nombre: $("#edit-nombre").val(),
        estado: $("#edit-estado").val(),
      };

      $.ajax({
        url: "../../../../Controller/Servicio/ServicioController.php",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function (response) {
          console.log("Servicio actualizado:", response);
          $("#editServicioModal").modal("hide");
          getServicios(localStorage.getItem("selectedDivId"));
        },
        error: function (xhr, status, error) {
          console.error("Error al actualizar el servicio:", status, error);
          console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    });

    // * Enviar formulario de Editar Servicio
    $("#edit-servicio-form").on("submit", function (e) {
      e.preventDefault();
      const formData = {
        action: "update",
        tipo_servicio: $("#edit-tipo-servicio").val(),
        descripcion: $("#edit-descripcion-servicio").val(),
      };

      $.ajax({
        url: "../../../../Controller/Servicio/ServicioController.php",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function (response) {
          console.log("Servicio actualizado:", response);
          $("#editServicioModal").modal("hide");
          getServicios(localStorage.getItem("selectedDivId"));
        },
        error: function (xhr, status, error) {
          console.error("Error al actualizar el servicio:", status, error);
          console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    });
  });
});

// ! Función genérica de AJAX
function ajaxRequest(action, data, callback) {
  $.ajax({
    url: "../../../../Controller/Institucion/InstitucionController.php",
    type: "POST",
    data: { action: action, ...data },
    dataType: "json",
    success: callback,
    error: function (xhr, status, error) {
      console.error(
        `Error en la solicitud AJAX para ${action}:`,
        status,
        error
      );
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
}

// * Enviar formulario de Crear Área
$("#create-area-form").on("submit", function (e) {
  e.preventDefault();
  const formData = {
    action: "create",
    nombre: $("#nombre").val(),
    estado: $("#estado").val(),
  };

  // Llamada AJAX específica para crear el área
  $.ajax({
    url: "../../../../Controller/Area/AreaController.php", // Cambia esta ruta a la del archivo que maneja la actualización de áreas
    type: "POST",
    data: formData,
    dataType: "json",
    success: function (response) {
      console.log("Área actualizada:", response);
      $("#editAreaModal").modal("hide");
      fetchInstitucionData(localStorage.getItem("selectedDivId")); // Recargar áreas después de la actualización
    },
    error: function (xhr, status, error) {
      console.error("Error al actualizar el área:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
});

// * Enviar formulario de Crear Servicio
$("#create-servicio-form").on("submit", function (e) {
  e.preventDefault();
  const formData = {
    action: "create",
    tipo_servicio: $("#tipo_servicio").val(),
    descripcion_servicio: $("#descripcion_servicio").val(),
  };

  ajaxRequest(formData.action, formData, function (response) {
    console.log("Servicio creado:", response);
    $("#exampleModalToggle").modal("hide");
    getServicios(localStorage.getItem("selectedDivId"));
  });
});

// * Enviar formulario de Editar Área
$("#edit-area-form").on("submit", function (e) {
  e.preventDefault();
  const formData = {
    action: "update",
    codigo: $("#save-area-changes").data("codigo"),
    nombre: $("#edit-nombre").val(),
    estado: $("#edit-estado").val(),
  };

  // Llamada AJAX específica para actualizar el área
  $.ajax({
    url: "../../../../Controller/Area/AreaController.php", // Cambia esta ruta a la del archivo que maneja la actualización de áreas
    type: "POST",
    data: formData,
    dataType: "json",
    success: function (response) {
      console.log("Área actualizada:", response);
      $("#editAreaModal").modal("hide");
      fetchInstitucionData(localStorage.getItem("selectedDivId")); // Recargar áreas después de la actualización
    },
    error: function (xhr, status, error) {
      console.error("Error al actualizar el área:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
});

// * Evento para eliminar reserva con SweetAlert
$(document).on("click", ".btn-delete-reserva", function () {
  const reservaId = $(this).data("reserva");
  console.log(reservaId);

  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esto.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarla",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Llamada AJAX para eliminar la reserva
      $.ajax({
        url: "../../../../Controller/Reserva/ReservaController.php",
        type: "POST",
        data: {
          action: "delete",
          id: reservaId,
        },
        success: function (response) {
          Swal.fire("Eliminada!", "Reserva eliminada con éxito.", "success");
          fetchInstitucionData(localStorage.getItem("selectedDivId")); // Recargar datos después de la eliminación
        },
        error: function (xhr, status, error) {
          Swal.fire(
            "Error",
            "No se pudo eliminar la reserva. Intenta nuevamente.",
            "error"
          );
          console.error("Error al actualizar el área:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    }
  });
});

// * Evento para eliminar area con SweetAlert
$(document).on("click", ".btn-delete-area", function () {
  const areaCodigo = $(this).data("codigo");
  console.log(areaCodigo);

  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esto.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarla",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Llamada AJAX para eliminar la reserva
      $.ajax({
        url: "../../../../Controller/Area/AreaController.php",
        type: "POST",
        data: {
          action: "delete",
          codigo: areaCodigo,
        },
        success: function (response) {
          Swal.fire("Eliminada!", "Reserva eliminada con éxito.", "success");
          fetchInstitucionData(localStorage.getItem("selectedDivId")); // Recargar datos después de la eliminación
        },
        error: function (xhr, status, error) {
          Swal.fire(
            "Error",
            "No se pudo eliminar la reserva. Intenta nuevamente.",
            "error"
          );
          console.error("Error al actualizar el área:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    }
  });
});

// * Evento para eliminar servicio con SweetAlert
$(document).on("click", ".btn-delete-servicio", function () {
  const areaCodigo = $(this).data("id_servicio");
  console.log(areaCodigo);

  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esto.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarla",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Llamada AJAX para eliminar la reserva
      $.ajax({
        url: "../../../../Controller/Servicio/ServicioController.php",
        type: "POST",
        data: {
          action: "delete",
          id_servicio: areaCodigo,
        },
        success: function (response) {
          Swal.fire("Eliminada!", "Reserva eliminada con éxito.", "success");
          fetchInstitucionData(localStorage.getItem("selectedDivId")); // Recargar datos después de la eliminación
        },
        error: function (xhr, status, error) {
          Swal.fire(
            "Error",
            "No se pudo eliminar la reserva. Intenta nuevamente.",
            "error"
          );
          console.error("Error al actualizar el área:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    }
  });
});

// * Evento para eliminar usuario con SweetAlert
$(document).on("click", ".btn-delete-usuario", function () {
  const usuarioId = $(this).data("ci");
  console.log(usuarioId);

  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esto.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminarlo",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Llamada AJAX para eliminar el usuario
      $.ajax({
        url: "../../../../Controller/Usuario/UsuarioController.php",
        type: "POST",
        data: {
          action: "delete",
          institucion: idInstitucion,
          ci: usuarioId,
        },
        success: function (response) {
          Swal.fire("Eliminado!", "Usuario eliminado con éxito.", "success");
          fetchInstitucionData(localStorage.getItem("selectedDivId")); // Recargar datos después de la eliminación
        },
        error: function (xhr) {
          Swal.fire(
            "Error",
            "No se pudo eliminar el usuario. Intenta nuevamente.",
            "error"
          );
        },
      });
    }
  });
});

// ! Obtener y cargar datos de la institución
function fetchInstitucionData(id) {
  ajaxRequest("instituciones", {}, function (response) {
    const institucion = response[id];
    if (institucion) {
      const institucionCodeID = institucion.codigo;
      idInstitucion = institucionCodeID;
      const institucionName = institucion.nombre;
      getUsuarios(institucionCodeID, institucionName);
      getAreas(institucionCodeID, institucionName);
      getServicios(institucionCodeID, institucionName);
      getReservas(institucionCodeID, institucionName);
    } else {
      console.error("La institución con el id proporcionado no existe.");
    }
  });
}

// * Obtener y listar áreas de la institución
function getAreas(codigo, nombre) {
  ajaxRequest("AreasByInstitucion", { nombre }, function (response) {
    $(".h1-areas-servicios").text(
      'Gestiona las áreas y servicios de "' + nombre + '"'
    );

    const sectionAreaList = $(".section-area-list").empty();

    response.forEach((res) => {
      const sectionGetAreas = $(`
        <div class="section-get-areas">
          <div id="area-item">
            <p>${res.codigo}</p>
            <p>${res.nombre}</p>
            <p>${res.estado}</p>
            <button class="btn-edit-area" data-codigo="${res.codigo}" data-nombre="${res.nombre}" data-estado="${res.estado}" style="background-color: transparent; border: none;">
              <img src="../../img/icon-lapiz.png" style="width: 3rem;">
            </button>
            <button class="btn-delete-area" data-codigo="${res.codigo}">
              <img src="../../img/icon-papelera.png" style="width: 3rem;">
            </button>
          </div>
        </div>`);
      sectionAreaList.append(sectionGetAreas);
    });
  });
}

// * Función para obtener y mostrar Usuarios
function getUsuarios(codigo, nombre) {
  ajaxRequest("UsuariosByInstitucion", { nombre }, function (response) {
    console.log("Usuarios de la institución:", nombre);
    $(".h1-usuarios-institucion").text(
      'Gestiona los usuarios de "' + nombre + '"'
    );
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
            <button class="btn-delete-usuario" data-ci="${res.ci}" style="background-color: transparent; border: none;">
              <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;">
            </button>
          </div>
        </div>`);
      sectionUsersList.append(sectionGetUsers);
    });

  });
}

// * Función para obtener y mostrar Servicios
function getServicios(codigo, nombre) {
  ajaxRequest("ServiciosByInstitucion", { nombre }, function (response) {
    const sectionServicesList = $(".section-services-list").empty();

    response.forEach((res) => {
      const sectionGetServices = $(`        
        <div class="section-get-services">
          <div id="service-item">
            <p>${res.id_servicio}</p>
            <p>${res.tipo_servicio}</p>
            <p>${res.descripcion}</p>
            <button class="btn-edit-servicio" data-id="${res.id_servicio}" data-tipo="${res.tipo_servicio}" data-descripcion="${res.descripcion}" style="background-color: transparent; border: none;">
              <img src="../../img/icon-lapiz.png" style="width: 3rem;">
            </button>
            <button class="btn-delete-servicio" data-id_servicio="${res.id_servicio}" style="background-color: transparent; border: none;">
              <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;">
            </button>
          </div>
        </div>`);
      sectionServicesList.append(sectionGetServices);
    });
  });
}

// * Función para obtener y mostrar Reservas
function getReservas(codigo, nombre) {
  ajaxRequest("ReservasByInstitucion", { nombre }, function (response) {
    $(".h1-todas-las-reservas").text(
      'Gestiona las reservas de "' + nombre + '"'
    );
    const sectionReservationList = $(".section-reservation-list").empty();

    response.forEach((res) => {
      const sectionGetReservation = $(`        
        <div class="section-get-reservation">
          <div id="reservation-item">
            <p>${res.id}</p>
            <p>${res.estado}</p>
            <p>${formatDate(res.fecha)}</p>
            <p>${formatTime(res.hora_inicio)}</p>
            <p>${formatTime(res.hora_fin)}</p>
            <p>${res.observaciones}</p>
            <p>${res.codigo_area}</p>
            <button class="btn-delete-reserva" data-reserva="${
              res.id
            }" style="background-color: transparent; border: none;">
              <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 2rem 0 1rem;">
            </button>
          </div>
        </div>`);
      sectionReservationList.append(sectionGetReservation);
    });
  });
}

// Formatear la fecha a DD-MM-YYYY
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString("es-ES", options);
}

// Formatear la hora a HH:MM
function formatTime(timeString) {
  const time = new Date("1970-01-01T" + timeString + "Z");
  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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



