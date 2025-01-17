$(document).ready(function () {
    $('#register-form').submit(function (e) {
        e.preventDefault();

        // Obtener valores de los campos del formulario
        let ci = $('#ci').val();
        let contrasena = $('#contrasena').val();
        let nombre_completo = $('#nombre_completo').val();
        let telefono = $('#telefono').val();
        let mail_corporativo = $('#mail_corporativo').val();
        let mail_personal = $('#mail_personal').val();
        //let foto_perfil = $('#foto_perfil').val();
        //let tipo_empleado = $('#tipo_empleado').val();

        // Verificar si todos los campos necesarios están llenos
        if (ci == "" || contrasena == "" || nombre_completo == "" || telefono == "" || mail_personal == "") {
            Swal.fire({
                icon: 'warning',
                title: '¡Atención!',
                text: 'Por favor, completa todos los campos requeridos para registrarte.',
                confirmButtonText: 'Entendido',
            });
        } else {
            // Enviar la solicitud AJAX para registrar al nuevo usuario
            $.ajax({
                url: '../../../../Controller/Auth/ControladorRegistro.php',
                type: 'POST',
                data: {
                    ci: ci,
                    contrasena: contrasena,
                    nombre_completo: nombre_completo,
                    telefono: telefono,
                    mail_corporativo: mail_corporativo,
                    mail_personal: mail_personal,
                },
                dataType: 'json',
                success: function (response) {
                    if (response.estado === 'Registro exitoso!') {
                        Swal.fire({
                            icon: 'success',
                            title: '¡Registrado!',
                            text: 'Tu usuario ha sido registrado exitosamente.',
                        }).then(() => {
                            window.location.href = '../../../../View/public/html/General/MainDashboard.html'; // Redirige en el cliente
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: response.error || 'Ocurrió un error al registrar el usuario.',
                        });
                    }
                },
                //Si hay un error en la solicitud AJAX
                error: function (xhr, status, error) {
                    console.error('Error en la solicitud AJAX:', status, error);
                    console.error('Respuesta del servidor:', xhr.responseText);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.',
                    });
				},
			});
		}
	});
});