//Script que se utiliza para mostrar una vista previa de la reserva que se está creando.

function updatePreview() {
    let previewData = {
        fecha: $('#fecha_reserva').val(),
        horaDesde: $('#hora_reserva_desde').val(),
        horaHasta: $('#hora_reserva_hasta').val(),
        instituto: $('#instituto option:selected').text(),
        area: $('#area option:selected').text(),
        servicio: $('#servicio option:selected').text(),
        observaciones: $('#observaciones').val()
    };
    $('#reservation-item').html(`
        <p>${previewData.fecha}</p>
        <p>${previewData.horaDesde}</p>
        <p>${previewData.horaHasta}</p>
        <p>${previewData.instituto}</p>
        <p>${previewData.area}</p>
        <p>${previewData.servicio}</p>
        <p>${previewData.observaciones}</p>
    `);
}

$(document).ready(function() {
    $('#instituto, #area, #fecha_reserva, #hora_reserva_desde, #hora_reserva_hasta, #servicio, #observaciones').on('input change', function() {
        updatePreview();
    });

    updatePreview();
});