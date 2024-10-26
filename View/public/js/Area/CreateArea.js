$(document).ready(function () {
    verifySessionAndLoadUser();
    CreateArea();

    // Cargar instituciones al inicio después de verificar sesión
    function verifySessionAndLoadUser() {
        $.ajax({
            url: '../../../../Controller/Auth/AuthController.php',
            type: 'POST',
            data: { action: 'verificar_sesion' },
            dataType: 'json',
            success: function(response) {
                if (response.logueado) {
                    let usuario = response.usuario;
                    $('#navbarUser').text(usuario);
                    loadInstituciones(usuario);
                } else {
                    window.location.href = '../../html/Auth/Login.html';
                }
            },
            error: function(xhr, status, error) {
                console.error('Error al verificar la sesión');
            }
        });
    }

    // Cargar instituciones asociadas al usuario
    function loadInstituciones(usuario) {
        $.ajax({
            url: "../../../../Controller/Institucion/InstitucionController.php",
            type: "POST",
            data: {
                action: "instituciones",
                usuario: usuario
            },
            dataType: "json",
            success: function(response) {
                let institutoSelect = $('#institucion');
                institutoSelect.empty().append('<option value="" disabled selected hidden>Seleccione instituto</option>');

                response.forEach(institucion => {
                    institutoSelect.append(new Option(institucion.nombre, institucion.nombre));
                });

                // Evento para cargar áreas y servicios cuando se selecciona una institución
                institutoSelect.on('change', function() {
                    let institucionName = $(this).val();
                    loadAreas(institucionName);
                    loadServicios(institucionName);
                });
            },
            error: function(xhr, status, error) {
                console.error("Error al cargar instituciones:", status, error);
            }
        });
    }

    // Cargar áreas asociadas a la institución seleccionada
    function loadAreas(institucionName) {
        $.ajax({
            url: "../../../../Controller/Institucion/InstitucionController.php",
            type: "POST",
            data: {
              action: "AreasByInstitucion",
              nombre: institucionName, // Pasar solo el nombre como valor
            },
            dataType: "json",
            success: function(response) {
                let areaSelect = $('#nombre');
                areaSelect.empty().append('<option value="" disabled selected hidden>Seleccione área</option>');

                response.forEach(area => {
                    areaSelect.append(new Option(area.nombre, area.codigo));
                });
            },
            error: function(xhr, status, error) {
                try {
                    var jsonResponse = JSON.parse(jqXHR.responseText);
                    console.error('Respuesta del servidor:', jsonResponse);
                } catch (e) {
                    console.error('La respuesta no es un JSON válido:', jqXHR.responseText);
                }            
            }
        });
    }

    function CreateArea() {
        $('#create-area-form').submit(function(e) {
            e.preventDefault();

            let codigo = $('#codigo_area').val();
            let nombre = $('#nombre').val();
            let institucion = $('#institucion_perteneciente').val();
    
            if (codigo == "" || nombre == "" || institucion == "") {
                Swal.fire({
                    icon: 'warning',
                    title: '¡Atención!',
                    text: 'Por favor, completa todos los campos requeridos para agregar un área.',
                    confirmButtonText: 'Entendido',
                });
            } else {
                $.ajax({
                    url: '../../../../Controller/Area/AreaController.php',
                    type: 'POST',
                    data: {
                        action: 'create',
                        codigo: codigo,
                        nombre: nombre,
                        institucion: institucion,
                    },
                    dataType: 'json',
                    success: function(response) {
                        if (response.estado === 'Registro exitoso!') {
                                location.reload();
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Error en la solicitud AJAX:', status, error);
                        console.error('Respuesta del servidor:', xhr.responseText);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.',
                        });
                    }
                });
            }
        });
    }
});
