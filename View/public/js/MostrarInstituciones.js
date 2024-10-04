$(document).ready(function () {
	getAllInstituciones();
	
	function getAllInstituciones() {
		$.ajax({
			url: '../../controlador/controladorObtenerInstituciones.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				let instituciones = response;
				let sectionListadoInstituciones = $('.sectionListadoInstituciones');
				sectionListadoInstituciones.empty(); // Limpiar contenido previo.
	
				instituciones.forEach(res => {
					let sectionObtenerInstituciones = $(`
						<div class="sectionObtenerInstituciones">
							<div id="itemInstituciones">
								<p>Nombre: ${res.nombre}</p>
								<p>Calle: ${res.calle}</p>
								<p>Esquina: ${res.esquina}</p>
								<p>Puerta: ${res.puerta}</p>
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionListadoInstituciones.append(sectionObtenerInstituciones);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
