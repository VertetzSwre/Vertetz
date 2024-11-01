$(document).ready(function () {
    verifySessionAndLoadUser();

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
                let institutoSelect = $('#instituto');
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
                let areaSelect = $('#area');
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

    // Cargar servicios asociados a la institución seleccionada
    function loadServicios(institucionName) {
        $.ajax({
            url: "../../../../Controller/Institucion/InstitucionController.php",
            type: "POST",
            data: {
              action: "ServiciosByInstitucion",
              nombre: institucionName, // Pasar solo el nombre como valor
            },
            dataType: "json",
            success: function(response) {
                let servicioSelect = $('#servicio');
                servicioSelect.empty().append('<option value="" disabled selected hidden>Seleccione servicio</option>');

                response.forEach(servicio => {
                    servicioSelect.append(new Option(servicio.tipo_servicio, servicio.id_servicio));
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

    function createReserva() {
        
    }
});
