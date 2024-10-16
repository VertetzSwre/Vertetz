$(document).ready(function () {
    // Al escribir en el campo de búsqueda
    $('#search').on('input', function () {
        let query = $(this).val(); // Obtiene el valor de búsqueda
        if (query.length > 0) {
            searchReservas(query);  // Llama a la función para buscar
        } else {
            getAllReservas();  // Si no hay texto, muestra todas las reservas
        }
    });

    function searchReservas(query) {
        $.ajax({
            url: '../../../../Controller/Reserva/SearchController.php', // Nuevo archivo PHP para búsqueda
            type: 'POST',
            data: {
                search_query: query // Pasa el valor de la búsqueda
            },
            dataType: 'json',
            success: function (response) {
                console.log(response); // Verifica la respuesta en la consola
                let sectionReservationList = $('.section-reservation-list'); //Contenedor de la reserva
                sectionReservationList.empty(); // Limpia el contenedor

                if (response.length > 0) {
                    // Mostrar solo las reservas que coincidan
                    response.forEach(res => {
                        let sectionGetReservation = $(`
                            <div class="section-get-reservation">
                                <div id="reservation-item">
                                    <p>ID: ${res.id}</p>
                                    <p>Estado: ${res.estado}</p>
                                    <p>Fecha: ${res.fecha}</p>
                                    <p>Hora Inicio: ${res.hora_inicio}</p>
                                    <p>Hora Fin: ${res.hora_fin}</p>
                                    <p>Observaciones: ${res.observaciones}</p>
                                    <p>Nombre Institución: ${res.nombre_institucion}</p>
                                    <p>Código Área: ${res.codigo_area}</p>
                                </div>
                            </div>
                        `);
                        sectionReservationList.append(sectionGetReservation);
                    });
                } else { // Mostrar mensaje si no hay resultados
                    sectionReservationList.append('<p style="font-size: 2.5rem;">No se encontraron coincidencias en la búsqueda.</p>');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error en la solicitud AJAX:', status, error);
                console.error('Respuesta del servidor:', xhr.responseText);
            }
        });
    }

    // Funcion original que obtiene todas las reservas
    function getAllReservas() {
        $.ajax({
            url: '../../../../Controller/Reserva/ControladorObtenerReservas.php',
            type: 'POST',
            data: {
                res: 1
            },
            dataType: 'json',
            success: function (response) {
                /*Mostrar todas las reservas de la BDD en fila*/
                let reservas = response;
                let sectionReservationList = $('.section-reservation-list');
                sectionReservationList.empty(); // Limpiar contenido previo.

                reservas.forEach(res => {
                    let sectionGetReservation = $(`
                        <div class="section-get-reservation">
                            <div id="reservation-item">
                                <p>ID: ${res.id}</p>
                                <p>Estado: ${res.estado}</p>
                                <p>Fecha: ${res.fecha}</p>
                                <p>Hora Inicio: ${res.hora_inicio}</p>
                                <p>Hora Fin: ${res.hora_fin}</p>
                                <p>Observaciones: ${res.observaciones}</p>
                                <p>Nombre Institución: ${res.nombre_institucion}</p>
                                <p>Código Área: ${res.codigo_area}</p>
                            </div>
                        </div>
                    `);
                    sectionReservationList.append(sectionGetReservation);
                });
            },
            error: function (xhr, status, error) {
                console.error('Error en la solicitud AJAX:', status, error);
                console.error('Respuesta del servidor:', xhr.responseText);
            },
        });
    }

    // Llamar a getAllReservas al cargar la página para mostrar todas las reservas inicialmente
    getAllReservas();
});