$(document).ready(function () {
	getAllServicios()

	function getAllServicios() {
		$.ajax({
			url: '../../../../Controller/Servicio/ControladorObtenerServicios.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				
				let servicios = response;
				let sectionServicesList = $('.section-services-list');
				sectionServicesList.empty(); // Limpiar contenido previo.
	
				servicios.forEach(res => {
					let sectionGetServices = $(`
						<div class="section-get-services">
							<div id="service-item">
								<p>Id del servicio: ${res.id_servicio}</p>
								<p>Tipo de servicio: ${res.tipo_servicio}</p>
								<p>Descripcion: ${res.descripcion}</p>
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionServicesList.append(sectionGetServices);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
