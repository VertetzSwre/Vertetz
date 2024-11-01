const montName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth();
    var currentMonth = month;
    var year = now.getFullYear(); 
    var currentDay = now.getDay(); // Obtener el día de la semana actual
    
    // Función que actualiza el calendario.
    function initCalendar() {
        $('#text-day').text(`${dayNames[currentDay]}, ${day}`);
        $('#text-month').text(montName[month]);
        $('#text-year').text(year);
    
        $('.item-day').remove();
    
        let startDayIndex = startDay();
        let totalDays = getTotalDays(month);
    
        // Función para colocar los días del mes anterior
        let prevMonthDays = getTotalDays(month - 1);
        for (let i = startDayIndex - 1; i >= 0; i--) {
            $('.container-days').append(`<span class="item-day prev-month">${prevMonthDays - i}</span>`);
        }
    
        // Función para colocar los días del mes actual en la parte izquierda del calendario
        for (let i = 1; i <= totalDays; i++) {
            if (i == day && month == currentMonth) { //Remarcar el día actual
                $('.container-days').append(`<span class="item-day selected">${i}</span>`);
            } else {
                $('.container-days').append(`<span class="item-day">${i}</span>`);
                
            }
        }
    }

    // Función para cambiar al mes siguiente.
    function getNextMonth() {
        if (month !== 11) {
            month++;
        } else {
            year++;
            month = 0;
        }
        initCalendar();
        mostrarReservasEnCalendario(fechaSeleccionada); // Llama aquí
    }
     // Evento de click en el botón de cambio de mes siguiente.
     $('#next-month').on('click', function() {
        getNextMonth();
    });

    // Función para cambiar al mes anterior.
    function getPrevMonth() {
        if (month !== 0) {
            month--;
        } else {
            year--;
            month = 11;
        }
        initCalendar();
    }
       // Evento de click en el botón de cambio de mes anterior.
       $('#last-month').on('click', function() {
        getPrevMonth();
        mostrarReservasEnCalendario(fechaSeleccionada); // Llama aquí
    });
    

    // Función para determinar el primer día del mes.
    function startDay() {
        var start = new Date(year, month, 1);
        return start.getDay();
    }
    
    // Función para años bisiestos.
    function leapYear() {
        return ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
    }
    
    // Función para obtener el total de días en un mes.
    function getTotalDays(month) {
        if (month < 0) month = 11;
        if (month == 1) {
            return leapYear() ? 29 : 28;
        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            return 30;
        } else {
            return 31;
        }
    }

        // Función para formatear la fecha
function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
}

// Función para formatear la hora
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
}

function mostrarReservasEnCalendario(fechaSeleccionada) {
    // Verificar si window.reservas está definido
if (!window.reservas) {
    console.error('No se han cargado las reservas.');
    return;
}
    // Limpiar la sección derecha del calendario
    $('.reservation-details').empty();

    // Filtrar las reservas que coincidan con el día actual del calendario
    const reservasDelDia = window.reservas.filter(reserva => {
        return reserva.fecha === fechaSeleccionada;
    });

    // Si no hay reservas para la fecha seleccionada, vaciar el contenedor
    if (reservasDelDia.length === 0) {
        $('.reservation-details').html('<p>No hay reservas para esta fecha.</p>');
        return;
}
    // Mostrar las reservas en la sección derecha del calendario
        reservasDelDia.forEach(reserva => {
            const reservaHtml = `
                <div class="row">
                    <p id="solicitante-username"></p>
                    <p>Codigo Area: ${reserva.codigo_area}</p> 
                </div>
                <div class="row">
                    <div class="row"><button class="more-details">Más detalles</button></div>
                    <div class="row"><p style="font-size: 1.2rem; padding: 0; text-align: center;">Horario: ${reserva.hora_inicio} a ${reserva.hora_fin}</p></div>
                </div>
            `;
            $('.reservation-details').html(reservaHtml);
        });
        
    // Realiza la llamada AJAX para obtener el nombre de usuario al generar las reservas
    $.ajax({
        url: '../../../../Controller/Auth/AuthController.php',
        type: 'POST',
        data: {
          action: 'verificar_sesion'
        },
        dataType: 'json',
        success: function(response) {
          console.log(response);  
          if (response.logueado) {
            let reservaUsernameContent = $('#solicitante-username');
            reservaUsernameContent.empty();
            $('#solicitante-username').text('Solicitante: ' + response.usuario);
          } else {
            window.location.href = '../../html/Auth/Login.html'; // Redirigir si no está logueado
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error('Error en la solicitud AJAX:', textStatus, errorThrown);
        }
      });
}

function getAllReservasPorFecha() {
    $.ajax({
        url: '../../../../Controller/Reserva/ReservaController.php',
        type: 'POST',
        data: {
            action: 'readByUsuario',
        },
        dataType: 'json',
        success: function (response) {
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

            // Guardar las reservas en una variable global para su uso posterior
            window.reservas = response;

            // Llamar a la función para mostrar las reservas en el calendario
            mostrarReservasEnCalendario();
        },
        error: function (xhr, status, error) {
            console.error('Error en la solicitud AJAX:', status, error);
            console.error('Respuesta del servidor:', xhr.responseText);
        }
    });
}

    //Funcion que al seleccionar un dia lo remarca
    $(document).on('click', '.item-day', function() {
        $('.item-day').removeClass('selected');
        $(this).addClass('selected');

        //Actualizar el día seleccionado en la parte superior del calendario
        let selectedDay = $(this).text();
        let selectedDayIndex = $(this).index() % 7; // Obtener el índice del día de la semana
        $('#text-day').text(`${dayNames[selectedDayIndex]}, ${selectedDay}`);

        // Obtener la reserva de la fecha seleccionada
        let selectedMonth = (month + 1).toString().padStart(2, '0'); // month es la variable global del mes actual
        let selectedYear = year.toString(); // year es la variable global del año actual
        const fechaSeleccionada = `${selectedDay.padStart(2, '0')}/${selectedMonth}/${selectedYear}`;

        // Llamar a mostrarReservasEnCalendario con la fecha seleccionada
        mostrarReservasEnCalendario(fechaSeleccionada);
    
    });

    // Cuando el documento está cargado, se ejecutan todas las funciones.
    $(document).ready(function() {
        initCalendar();
        getAllReservasPorFecha();
        mostrarReservasEnCalendario();
    });