$(document).ready(function () {
	getAllServicios()

	function getAllServicios() {
		$.ajax({
			url: '../../../../Controller/Servicio/ServicioController.php',
			type: 'POST',
			data: {
				action: 'read',
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
								<p>${res.id_servicio}</p>
								<p>${res.tipo_servicio}</p>
								<p>${res.descripcion}</p>
								<img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
                                <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionServicesList.append(sectionGetServices);
				});

				 //Funcion para cambiar entre area y servicios
				 function changeArea() {
                    $('.btn-change-servicios').on('click', function () {
                        $('.section-area-list').css('display', 'none');
						

                    });
                }

                function changeServicios() {
                    $('.btn-change-area').on('click', function () {
                        $('.section-area-list').css('display', 'inherit');
                    });
                }

                // Llamar a la función para manejar el evento de clic
            changeArea();
            changeServicios();

			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
