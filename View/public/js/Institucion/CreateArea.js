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

                //Funcion para cargar el estado de las areas
                let estadoSelect = $('#estado');
                estadoSelect.empty().append('<option value="" disabled selected hidden>Seleccione estado</option>');

                //Que no se repitan los estados
                let estados = []; //Array para almacenar los estados
                response.forEach(area => {
                    if (!estados.includes(area.estado)) {
                        estados.push(area.estado);
                        estadoSelect.append(new Option(area.estado));
                    }
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

    // Función para crear un área
    function CreateArea() {
        $('#create-area-form').submit(function(e) {
            e.preventDefault();

            let codigo = $('#codigo').val();
            let nombre = $('#nombre').val();
            let institucion = $('#institucion').val();
            let estado = $('#estado').val();

            if (codigo == "" || nombre == "" || institucion == "" || estado == "") {
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
                        estado: estado,
                    },
                    dataType: 'json',
                    success: function(response) {
                        if (response.estado === 'Registro exitoso!') {
                            Swal.fire({
                                icon: 'success',
                                title: '¡Éxito!',
                                text: 'Has registrado el área correctamente.',
                                showConfirmButton: false,
                                timer: 2000,
                            }).then(() => {
                                location.reload();
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Error',
                                text: 'No se pudo registrar el área. Por favor, inténtalo nuevamente.',
                            });
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
