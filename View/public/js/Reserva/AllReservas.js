$(document).ready(function () {
    let debounceTimer;

    // Al escribir en el campo de búsqueda
    $('#search').on('input', function () {
        let inputValue = $(this).val(); // Obtiene el valor de búsqueda

        // Si ya hay un temporizador activo, lo reinicia
        clearTimeout(debounceTimer);

        // Establece un nuevo temporizador de 300ms (puedes ajustar este valor)
        debounceTimer = setTimeout(function () {
            if (inputValue.length > 0) {
                searchReservas(inputValue);  // Llama a la función para buscar
                console.log('Input value: ', inputValue);
            } else {
                getAllReservas();  // Si no hay texto, muestra todas las reservas
            }
        }, 300); // Espera 300 milisegundos antes de hacer la búsqueda
    });

    function searchReservas(inputValue) {
        $.ajax({
            url: '../../../../Controller/Reserva/SearchController.php', // Nuevo archivo PHP para búsqueda
            type: 'GET',
            data: {
                search_query: inputValue // Pasa el valor de la búsqueda
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
                                <p>${res.id}</p>
                                <p>${res.estado}</p>
                                <p>${res.fecha}</p>
                                <p>${res.hora_inicio}</p>
                                <p>${res.hora_fin}</p>
                                <p>${res.observaciones}</p>
                                <p>${res.nombre_institucion}</p>
                                <p>${res.codigo_area}</p>
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
            url: '../../../../Controller/Reserva/ReservaController.php',
            type: 'POST',
            data: {
                action: 'read',
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
                                <p>${res.id}</p>
                                <p>${res.estado}</p>
                                <p>${res.fecha}</p>
                                <p>${res.hora_inicio}</p>
                                <p>${res.hora_fin}</p>
                                <p>${res.observaciones}</p>
                                <p>${res.nombre_institucion}</p>
                                <p>${res.codigo_area}</p>
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
