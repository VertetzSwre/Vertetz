$(document).ready(function () {
  // Obtener el id del div almacenado en LocalStorage
  let selectedDivId = localStorage.getItem("selectedDivId");

  if (selectedDivId) {
    console.log("ID del div seleccionado:", selectedDivId);
    getUsuarios(selectedDivId); // Llamar a la función para obtener los usuarios de la institucion
    getAreas(selectedDivId); // Llamar a la función para obtener las areas de la institucion
    getServicios(selectedDivId); // Llamar a la función para obtener los servicios de la institucion
    getReservas(selectedDivId); // Llamar a la función para obtener las reservas de la institucion

    // Llamada inicial para configurar el comportamiento de los botones y mostrar 'Área' como predeterminado
    toggleSection();
  } else {
    console.error("No se encontró el id del div seleccionado.");
  }

  // Opción para borrar el LocalStorage solo cuando ya no sea necesario el id
  $("#finalizarAccion").on("click", function () {
    localStorage.removeItem("selectedDivId");
  });
});

function getAreas(id) {
  $.ajax({
    url: "../../../../Controller/Institucion/InstitucionController.php",
    type: "POST",
    data: {
      action: "instituciones",
    },
    dataType: "json",
    success: function (response) {
      // Suponiendo que `response` es un array de instituciones
      let institucion = response[id]; // Acceder al elemento del array por su índice

      if (institucion) {
        let institucionName = institucion.nombre; // Acceder a la propiedad nombre de la institución
        console.log(institucionName);

        // Ahora hacer una segunda solicitud para obtener más detalles sobre la institución
        $.ajax({
          url: "../../../../Controller/Institucion/InstitucionController.php",
          type: "POST",
          data: {
            action: "AreasByInstitucion",
            nombre: institucionName, // Pasar solo el nombre como valor
          },
          dataType: "json",
          success: function (response) {
            console.log(response);
            $('#container-areas-servicios').prepend(`<h1 class="h1-todas-las-reservas">Gestiona las areas y servicios de ${institucionName}</h1>`);

            let areas = response;
            let sectionAreaList = $(".section-area-list");
            sectionAreaList.empty(); // Limpiar contenido previo.

            areas.forEach((res) => {
              let sectionGetAreas = $(`
                        <div class="section-get-areas">
                            <div id="area-item">
                                <p>${res.codigo}</p>
                                <!-- <p>${res.institucion_perteneciente}</p> -->
                                <p>${res.nombre}</p>
                                <p>${res.estado}</p>
                                <img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
                                <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
                            </div>
                        </div>
                    `);
              /*Enviar los resultados dentro del contenedor para mostrarlos*/
              sectionAreaList.append(sectionGetAreas);
            });
          },
        });
      } else {
        console.error("La institución con el id proporcionado no existe.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error en la solicitud AJAX:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
}


function getUsuarios(id) {
  $.ajax({
    url: "../../../../Controller/Institucion/InstitucionController.php",
    type: "POST",
    data: {
      action: "instituciones",
    },
    dataType: "json",
    success: function (response) {
      // Suponiendo que `response` es un array de instituciones
      let institucion = response[id]; // Acceder al elemento del array por su índice

      if (institucion) {
        let institucionName = institucion.nombre; // Acceder a la propiedad nombre de la institución
        console.log(institucionName);

        // Ahora hacer una segunda solicitud para obtener más detalles sobre la institución
        $.ajax({
          url: "../../../../Controller/Institucion/InstitucionController.php",
          type: "POST",
          data: {
            action: "UsuariosByInstitucion",
            nombre: institucionName, // Pasar solo el nombre como valor
          },
          dataType: "json",
          success: function (response) {
            $('#container-usuarios').prepend(`<h1 class="h1-todas-las-reservas">Gestiona los usuarios de ${institucionName}</h1>`);

            console.log(response);

            let usuarios = response;
            let sectionUsersList = $(".section-users-list");
            sectionUsersList.empty(); // Limpiar contenido previo.

            usuarios.forEach((res) => {
              let sectionGetUsers = $(`
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
						</div>
					`);
              /*Enviar los resultados dentro del contenedor para mostrarlos*/
              sectionUsersList.append(sectionGetUsers);
            });
          },
        });
      } else {
        console.error("La institución con el id proporcionado no existe.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error en la solicitud AJAX:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
}


function getServicios(id) {
  $.ajax({
    url: "../../../../Controller/Institucion/InstitucionController.php",
    type: "POST",
    data: {
      action: "instituciones",
    },
    dataType: "json",
    success: function (response) {
      // Suponiendo que `response` es un array de instituciones
      let institucion = response[id]; // Acceder al elemento del array por su índice

      if (institucion) {
        let institucionName = institucion.nombre; // Acceder a la propiedad nombre de la institución
        console.log(institucionName);

        // Ahora hacer una segunda solicitud para obtener más detalles sobre la institución
        $.ajax({
          url: "../../../../Controller/Institucion/InstitucionController.php",
          type: "POST",
          data: {
            action: "ServiciosByInstitucion",
            nombre: institucionName, // Pasar solo el nombre como valor
          },
          dataType: "json",
          success: function (response) {
            console.log(response);
            // $('#container-areas-servicios').prepend(`<h1 class="h1-servicios-institucion">Gestiona los servicios de ${institucionName}</h1>`); // Hacer dinamico el nombre de la institucion acorde al boton
            let servicios = response;
            let sectionServicesList = $(".section-services-list");
            sectionServicesList.empty(); // Limpiar contenido previo.

            servicios.forEach((res) => {
              let sectionGetServices = $(`
						<div class="section-get-services">
							<div id="service-item">
								<p>${res.id_servicio}</p>
								<p>${res.tipo_servicio}</p>
								<p>${res.descripcion}</p>
								<img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
                                <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
							</div>
						</div>
					`);
              /*Enviar los resultados dentro del contenedor para mostrarlos*/
              sectionServicesList.append(sectionGetServices);
            });
          },
        });
      } else {
        console.error("La institución con el id proporcionado no existe.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error en la solicitud AJAX:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
}


function getReservas(id) {
  $.ajax({
    url: "../../../../Controller/Institucion/InstitucionController.php",
    type: "POST",
    data: {
      action: "instituciones",
    },
    dataType: "json",
    success: function (response) {
      // Suponiendo que `response` es un array de instituciones
      let institucion = response[id]; // Acceder al elemento del array por su índice

      if (institucion) {
        let institucionName = institucion.nombre; // Acceder a la propiedad nombre de la institución
        console.log(institucionName);

        // Ahora hacer una segunda solicitud para obtener más detalles sobre la institución
        $.ajax({
          url: "../../../../Controller/Institucion/InstitucionController.php",
          type: "POST",
          data: {
            action: "ReservasByInstitucion",
            nombre: institucionName, // Pasar solo el nombre como valor
          },
          dataType: "json",
          success: function (response) {
            /*Mostrar todas las reservas de la BDD en fila*/
            let reservas = response;

            $('#container-reservas').prepend(`<h1 class="h1-reservas-institucion">Gestiona las reservas de ${institucionName}</h1>`);
            let sectionReservationList = $('.section-reservation-list');
            sectionReservationList.empty(); // Limpiar contenido previo.
            
            reservas.forEach(res => {
                // let formattedDate = formatDate(res.fecha); //Variable que formatea la fecha
                let sectionGetReservation = $(`
                    <div class="section-get-reservation">
                        <div id="reservation-item">
                            <p>${res.id}</p>
                            <p>${res.estado}</p>
                            <p>${res.fecha}</p>
                            <p>${res.hora_inicio}</p>
                            <p>${res.hora_fin}</p>
                            <p>${res.observaciones}</p>
                            <!-- <p>${res.nombre_institucion}</p> -->
                            <p>${res.codigo_area}</p>
                        </div>
                    </div>
                `);
                sectionReservationList.append(sectionGetReservation);
            });
        },
        });
      } else {
        console.error("La institución con el id proporcionado no existe.");
      }
    },
    error: function (xhr, status, error) {
      console.error("Error en la solicitud AJAX:", status, error);
      console.error("Respuesta del servidor:", xhr.responseText);
    },
  });
}

// Función para alternar entre las secciones 'Área' y 'Servicios'
function toggleSection() {
  // Configuración inicial: mostrar la sección 'Área' y ocultar 'Servicios'
  $(".section-area-list").css("display", "inherit");
  $(".section-services-list").css("display", "none");
  $(".btn-change-area").addClass("btn-selected");
  $(".btn-change-servicios").removeClass("btn-selected");

  // Evento para el botón de 'Servicios'
  $(".btn-change-servicios").on("click", function () {
    $(".section-area-list").css("display", "none");
    $(".section-services-list").css("display", "inherit");
    $(".btn-change-area").removeClass("btn-selected");
    $(".btn-change-servicios").addClass("btn-selected");

    // Cambiar la información de la data
    $(".section-usuario-data").css("display", "flex");
    $(".section-area-data").css("display", "none");
  });

  // Evento para el botón de 'Área'
  $(".btn-change-area").on("click", function () {
    $(".section-area-list").css("display", "inherit");
    $(".section-services-list").css("display", "none");
    $(".btn-change-area").addClass("btn-selected");
    $(".btn-change-servicios").removeClass("btn-selected");

    // Cambiar la información de la data
    $(".section-usuario-data").css("display", "none");
    $(".section-area-data").css("display", "flex");
  });
}
