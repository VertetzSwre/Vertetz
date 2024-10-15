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
    
        // Función para colocar los días del mes actual
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
    
    // Cuando el documento está cargado, se ejecutan todas las funciones.
    $(document).ready(function() {
        initCalendar();
    });