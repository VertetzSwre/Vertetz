$(document).ready(function() {
    // Verificar si la sesión está activa
    $.ajax({
        url: '../../../../Controller/Auth/AuthController.php',
        type: 'POST',
        data: { action: 'verificar_sesion' },
        dataType: 'json',
        success: function(response) {
            if (!response.logueado) {
                // Si no está logueado, redirigir a la página de login
                window.location.href = 'login.php';
            } else {
                console.log('Usuario logueado: ' + response.usuario);
                $('#welcome').text('Buenos días, ' + response.usuario);
                $('#NavBarUser').text(response.usuario); // Aquí se actualiza el span
            }
        },
        error: function(xhr, status, error) {
            console.log('Error al verificar la sesión');
        }
    });
});