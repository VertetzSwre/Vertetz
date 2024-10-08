$(document).ready(function () {
	getAllUsuarios();
	
	function getAllUsuarios() {
		$.ajax({
			url: '../../Control/ControladorObtenerUsuarios.php',
			type: 'POST',
			data: {
				res: 1
			},
			dataType: 'json',
			success: function (response) {
				console.log(response);

				let usuarios = response;
				let sectionUsersList = $('.section-users-list');
				sectionUsersList.empty(); // Limpiar contenido previo.
	
				usuarios.forEach(res => {
					let sectionGetUsers = $(`
						<div class="section-get-users">
							<div id="users-item">
								<p>CI: ${res.ci}</p>
								<p>Contraseña: ${res.contrasena}</p>
								<p>Nombre completo: ${res.nombre_completo}</p>
								<p>Mail personal: ${res.mail_personal}</p>
								<p>Telefono: ${res.telefono}</p>
								<p>Mail corporativo: ${res.mail_corporativo}</p>
								<p>Foto perfil: ${res.foto_perfil}</p>
								<p>Tipo de empleado: ${res.tipo_Empleado}</p>
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
