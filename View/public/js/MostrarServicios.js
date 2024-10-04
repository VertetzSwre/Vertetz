$(document).ready(function () {
	getAllServicios()

	function getAllServicios() {
		$.ajax({
			url: '../../controlador/controladorObtenerServicios.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				
				let servicios = response;
				let sectionListadoServicios = $('.sectionListadoServicios');
				sectionListadoServicios.empty(); // Limpiar contenido previo.
	
				servicios.forEach(res => {
					let sectionObtenerServicios = $(`
						<div class="sectionObtenerServicios">
							<div id="itemServicios">
								<p>Id del servicio: ${res.id_servicio}</p>
								<p>Tipo de servicio: ${res.tipo_servicio}</p>
								<p>Descripcion: ${res.descripcion}</p>
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionListadoServicios.append(sectionObtenerServicios);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
