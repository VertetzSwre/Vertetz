$(document).ready(function () {
	getAllReservas();
	
	function getAllReservas() {
		$.ajax({
			url: '../../controlador/ControladorObtenerReservas.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {

				/*Mostrar todas las reservas de la BDD en fila*/
				let reservas = response;
				let sectionListadoReservas = $('.sectionListadoReservas');
				sectionListadoReservas.empty(); // Limpiar contenido previo.
	
				reservas.forEach(res => {
					let sectionObtenerReserva = $(`
						<div class="sectionObtenerReserva">
							<div id="itemReserva">
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
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionListadoReservas.append(sectionObtenerReserva);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		}); 
	}/* Cierre de funcion */
});
