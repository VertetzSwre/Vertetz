$(document).ready(function () {
	getAllInstituciones();
	
	function getAllInstituciones() {
		$.ajax({
			url: '../../Control/ControladorObtenerInstituciones.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				let instituciones = response;
				let sectionInstitutionList = $('.section-institution-list');
				sectionInstitutionList.empty(); // Limpiar contenido previo.
	
				instituciones.forEach(res => {
					let sectionGetInstitutions = $(`
						<div class="section-get-institutions">
							<div id="institutions-item">
								<p>Nombre: ${res.nombre}</p>
								<p>Calle: ${res.calle}</p>
								<p>Esquina: ${res.esquina}</p>
								<p>Puerta: ${res.puerta}</p>
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionInstitutionList.append(sectionGetInstitutions);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
