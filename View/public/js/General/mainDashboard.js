$(document).ready(function () {
  // Función para formatear la fecha
  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  }

  // Función para obtener todas las reservas
  function getAllReservas() {
    $.ajax({
      url: "../../../../Controller/Usuario/UsuarioController.php",
      type: "POST",
      data: {
        action: "readByDate",
      },
      dataType: "json",
      success: function (response) {
        /* Mostrar todas las reservas de la BDD en fila */
        console.log(response); // Verificar respuesta en consola
        if (!response || !Array.isArray(response)) {
            sectionReservationList.append("<p>Error al obtener las reservas.</p>");
            return;
          }
        let reservas = response;
        let sectionReservationList = $("#nextReserves");
        sectionReservationList.empty(); // Limpiar contenido previo.

        // Verifica si hay reservas
        if (reservas.length === 0) {
          sectionReservationList.append("<p>No hay reservas disponibles.</p>");
          return; // Salir si no hay reservas
        }

        // Iterar sobre cada reserva y agregarla al DOM
        reservas.slice(0, 4).forEach((res) => {
          let formattedDate = formatDate(res.fecha); // Variable que formatea la fecha
          let sectionGetReservation = $(`
        <div class="section-get-reservation">
            <div id="reservation-item"> <!-- Cambia id a class para permitir múltiples elementos -->
                <p>ID: ${res.id}</p>
                <p>Estado: ${res.estado}</p>
                <p>Fecha: ${formattedDate}</p>
                <p>Hora Inicio: ${res.hora_inicio}</p>
                <p>Hora Fin: ${res.hora_fin}</p>
                <p>Observaciones: ${res.observaciones}</p>
                <p>Institución: ${res.nombre_institucion}</p>
                <p>Código Área: ${res.codigo_area}</p>
            </div>
        </div>
    `);
          sectionReservationList.append(sectionGetReservation);
        });
      },
      error: function (xhr, status, error) {
        console.error("Error en la solicitud AJAX:", status, error);
        console.error("Respuesta del servidor:", xhr.responseText);
      },
    });
  }

  // Llamar a getAllReservas al cargar la página para mostrar todas las reservas inicialmente
  getAllReservas();
});
