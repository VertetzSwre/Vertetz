$(document).ready(function () {

	getAllUsuarios();
	getAllReservas();
	getAllAreas();
	getAllInstituciones();
	getAllServicios();
        function getAllUsuarios(){
			$.ajax({
				url: '../../controlador/controladorObtenerUsuarios.php',
				type: 'POST',
				data: {
                    res: 1
				},
				dataType: 'json',
				success: function (response) {
					console.log(response);
				},
				error: function (xhr, status, error) {
					console.error('Error en la solicitud AJAX:', status, error);
					console.error('Respuesta del servidor:', xhr.responseText);
				},
			});
		}
		function getAllReservas(){
			$.ajax({
				url: '../../controlador/controladorObtenerReservas.php',
				type: 'POST',
				data: {
                    res: 1
				},
				dataType: 'json',
				success: function (response) {
					console.log(response);
				},
				error: function (xhr, status, error) {
					console.error('Error en la solicitud AJAX:', status, error);
					console.error('Respuesta del servidor:', xhr.responseText);
				},
			});
		}
		function getAllAreas(){
			$.ajax({
				url: '../../controlador/controladorObtenerAreas.php',
				type: 'POST',
				data: {
                    res: 1
				},
				dataType: 'json',
				success: function (response) {
					console.log(response);
				},
				error: function (xhr, status, error) {
					console.error('Error en la solicitud AJAX:', status, error);
					console.error('Respuesta del servidor:', xhr.responseText);
				},
			});
		}
		function getAllInstituciones(){
			$.ajax({
				url: '../../controlador/controladorObtenerInstituciones.php',
				type: 'POST',
				data: {
                    res: 1
				},
				dataType: 'json',
				success: function (response) {
					console.log(response);
				},
				error: function (xhr, status, error) {
					console.error('Error en la solicitud AJAX:', status, error);
					console.error('Respuesta del servidor:', xhr.responseText);
				},
			});
		}
		function getAllServicios(){
			$.ajax({
				url: '../../controlador/controladorObtenerServicios.php',
				type: 'POST',
				data: {
                    res: 1
				},
				dataType: 'json',
				success: function (response) {
					console.log(response);
				},
				error: function (xhr, status, error) {
					console.error('Error en la solicitud AJAX:', status, error);
					console.error('Respuesta del servidor:', xhr.responseText);
				},
			});
		}
});