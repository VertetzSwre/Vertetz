$(document).ready(function () {
	getAllAreas();

	function getAllAreas() {
		$.ajax({
			url: '../../controlador/controladorObtenerAreas.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				let areas = response;
				let sectionListadoAreas = $('.sectionListadoAreas');
				sectionListadoAreas.empty(); // Limpiar contenido previo.
	
				areas.forEach(res => {
					let sectionObtenerAreas = $(`
						<div class="sectionObtenerAreas">
							<div id="itemAreas">
								<p>Codigo: ${res.codigo}</p>
								<p>Institucion perteneciente: ${res.institucion_perteneciente}</p>
								<p>Nombre: ${res.nombre}</p>
								<p>Estado: ${res.estado}</p>
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionListadoAreas.append(sectionObtenerAreas);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
