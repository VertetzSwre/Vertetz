$(document).ready(function () {
	//Funcion para login
	$('#enviar').on('click', function () {
		if ($('#ci').val() == "" || $('#contrasena').val() == "") {
            Swal.fire({
                icon: 'warning',
                title: '¡Atención!',
                text: 'Por favor, completa todos los campos requeridos.',
            });
		} else {
			let cedula = $('#ci').val();
			let contrasena = $('#contrasena').val();
	
			$.ajax({
				url: '../../controlador/ControladorLogin.php',
				type: 'POST',
				data: {
					cedula: cedula,
					contrasena: contrasena,
				},
				dataType: 'json',
				success: function (response) {
					console.log(response);
					if (response.estado === 'Login exitoso!') {
						window.location.href = '../public/pestañaPrincipal.html'; // Redirige en el cliente
					} else {
						Swal.fire({
							title: 'Error!',
							text: 'Cédula o contraseña incorrectas',
							icon: 'error',
							confirmButtonText: 'Ok'
						});
					}
				},
				error: function (xhr, status, error) {
					console.error('Error en la solicitud AJAX:', status, error);
					console.error('Respuesta del servidor:', xhr.responseText);
				},
			});
		}
	});
});