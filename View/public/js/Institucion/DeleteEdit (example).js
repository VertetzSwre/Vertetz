$(document).ready(function () {

    // Oculta inicialmente las secciones de servicios y datos de usuario, así como el botón de añadir servicio
    $('.section-services-list').hide();
    $('.section-usuario-data').hide();
    $('#add-servicio').hide();
  
    // Recupera el ID del div seleccionado desde el almacenamiento local
    const selectedDivId = localStorage.getItem("selectedDivId");
  
    if (selectedDivId) {
      console.log("ID del div seleccionado:", selectedDivId);
      fetchInstitucionData(selectedDivId); // Cargar datos de la institución si existe un ID en localStorage
      toggleSection(); // Mostrar secciones necesarias
    } else {
      console.error("No se encontró el id del div seleccionado.");
    }
  
    // Limpia el LocalStorage al finalizar la acción
    $("#finalizarAccion").on("click", function () {
      localStorage.removeItem("selectedDivId");
    });
  
    // Función genérica para realizar solicitudes AJAX reutilizable
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
  
    // Carga y despliega datos de la institución
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
  
    // Obtener y listar áreas de la institución
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
                <button class="btn-edit-area" data-codigo="${res.codigo}" data-bs-toggle="modal" data-bs-target="#exampleModalToggle2">
                  <img src="../../img/icon-lapiz.png" style="width: 3rem;">
                </button>
                <button class="btn-delete-area" data-codigo="${res.codigo}">
                  <img src="../../img/icon-papelera.png" style="width: 3rem;">
                </button>
              </div>
            </div>`);
          sectionAreaList.append(sectionGetAreas);
        });
  
        // Evento para eliminar área con SweetAlert
        $('.btn-delete-area').on('click', function () {
          const codigo = $(this).data('codigo');
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
              ajaxRequest("EliminarArea", { codigo }, function (response) {
                Swal.fire('Eliminada!', 'Área Eliminada.', 'success');
                getAreas(nombre); // Recargar las áreas
              });
            }
          });
        });
      });
    }
  
    // Similar lógica de solicitud y evento para obtener usuarios de la institución
    function getUsuarios(nombre) {
      ajaxRequest("UsuariosByInstitucion", { nombre }, function (response) {
        $('#container-usuarios').prepend(`<h1 class="h1-todas-las-reservas">Gestiona los usuarios de ${nombre}</h1>`);
        const sectionUsersList = $(".section-users-list").empty();
        response.forEach((res) => {
          const sectionGetUsers = $(`
            <div class="section-user-list">
              <div id="users-item">
                <p>${res.ci}</p>
                <p>${res.nombre_completo}</p>
                <button class="btn-delete-usuario" data-ci="${res.ci}">
                  <img src="../../img/icon-papelera.png" style="width: 3rem;">
                </button>
              </div>
            </div>`);
          sectionUsersList.append(sectionGetUsers);
        });
  
        // Evento de eliminación para usuarios
        $('.btn-delete-usuario').on('click', function () {
          const ci = $(this).data('ci');
          Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              ajaxRequest("EliminarUsuario", { ci }, function (response) {
                Swal.fire('Eliminado!', 'Usuario Eliminado.', 'success');
                getUsuarios(nombre); // Recargar la lista de usuarios
              });
            }
          });
        });
      });
    }
  
    // Cargar servicios, similar a las funciones anteriores
    function getServicios(nombre) {
      ajaxRequest("ServiciosByInstitucion", { nombre }, function (response) {
        const sectionServicesList = $(".section-services-list").empty();
        response.forEach((res) => {
          const sectionGetServices = $(`
            <div class="section-get-services">
              <div id="service-item">
                <p>${res.id_servicio}</p>
                <p>${res.tipo_servicio}</p>
                <button class="btn-delete-servicio" data-id="${res.id_servicio}">
                  <img src="../../img/icon-papelera.png" style="width: 3rem;">
                </button>
              </div>
            </div>`);
          sectionServicesList.append(sectionGetServices);
        });
  
        // Evento de eliminación para servicios con SweetAlert
        $('.btn-delete-servicio').on('click', function () {
          const id = $(this).data('id');
          Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              ajaxRequest("EliminarServicio", { id }, function (response) {
                Swal.fire('Eliminado!', 'Servicio Eliminado.', 'success');
                getServicios(nombre); // Recargar servicios
              });
            }
          });
        });
      });
    }
  });
  