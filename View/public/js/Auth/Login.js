$(document).ready(function () {
	//Funcion para login
	$('#login-form').submit(function (e) {
		e.preventDefault();
		if ($('#ci').val() == "" || $('#contrasena').val() == "") {
            Swal.fire({
                icon: 'warning',
                title: '¡Atención!',
                text: 'Por favor, completa todos los campos requeridos.',
				confirmButtonText: 'Entendido',
            });
		} else {
			let cedula = $('#ci').val();
			let contrasena = $('#contrasena').val();
	
			$.ajax({
				url: '../../../../Controller/Auth/AuthController.php',
				type: 'POST',
				data: {
					cedula: cedula,
					contrasena: contrasena,
					action: 'login',
				},
				dataType: 'json',
				success: function (response) {
					console.log(response);
					console.log(response);
					if (response.logueado === 'Login exitoso') {
						Swal.fire({
							icon: 'success',
							title: '¡Bienvenido!' ,
							text: 'Has iniciado sesión correctamente',
							showConfirmButton: false,
                			timer: 2000,
						}).then(() => {
							window.location.href = '../../../../View/public/html/General/MainDashboard.html'; // Redirige en el cliente
						});
					} else {
						console.log(response);
						Swal.fire({
							title: '¡Error!',
							text: 'Cédula o contraseña incorrectas.',
							icon: 'error',
							confirmButtonText: 'Entendido',
						});
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.error('Error en la solicitud AJAX:', textStatus, errorThrown);
					try {
						var jsonResponse = JSON.parse(jqXHR.responseText);
						console.error('Respuesta del servidor:', jsonResponse);
					} catch (e) {
						console.error('La respuesta no es un JSON válido:', jqXHR.responseText);
					}
				}
			});
		}
	});
});