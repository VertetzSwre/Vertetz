$(document).ready(function () {
	getAllAreas();

	function getAllAreas() {
		$.ajax({
			url: '../../Control/ControladorObtenerAreas.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				let areas = response;
				let sectionAreaList = $('.section-area-list');
				sectionAreaList.empty(); // Limpiar contenido previo.
	
				areas.forEach(res => {
					let sectionGetAreas = $(`
						<div class="section-get-areas">
							<div id="area-item">
								<p>Codigo: ${res.codigo}</p>
								<p>Institucion perteneciente: ${res.institucion_perteneciente}</p>
								<p>Nombre: ${res.nombre}</p>
								<p>Estado: ${res.estado}</p>
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionAreaList.append(sectionGetAreas);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
