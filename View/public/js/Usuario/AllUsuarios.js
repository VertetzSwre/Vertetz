$(document).ready(function () {
	getAllUsuarios();

	function getAllUsuarios() {
		$.ajax({
			url: '../../../../Controller/Usuario/UsuarioController.php',
			type: 'POST',
			data: {
				action: 'readByInstitucion',
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				let usuarios = response;
				let sectionUsersList = $('.section-users-list');
				sectionUsersList.empty(); // Limpiar contenido previo.
	
				usuarios.forEach(res => {
					let sectionGetUsers = $(`
						<div class="section-user-list">
							<div id="users-item">
								<p>${res.ci}</p>
								<p>${res.contrasena}</p>
								<p>${res.nombre_completo}</p>
								<p>${res.mail_personal}</p>
								<p>${res.telefono}</p>
								<p>${res.mail_corporativo}</p>
								<p>${res.tipo_Empleado}</p>
							</div>
						</div>
					`);
				/*Enviar los resultados dentro del contenedor para mostrarlos*/ 
				sectionUsersList.append(sectionGetUsers);
				});
			},
			error: function (xhr, status, error) {
				console.error('Error en la solicitud AJAX:', status, error);
				console.error('Respuesta del servidor:', xhr.responseText);
			},
		});
	}
});
