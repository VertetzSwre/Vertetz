$(document).ready(function () {

    //Oculta la lista de todos los servicios, asi como su informacion
    $('.section-services-list').css('display', 'none');
    $('.section-usuario-data').css('display', 'none');

    getAllAreas();

    function getAllAreas() {
        $.ajax({
            url: '../../../../Controller/Area/AreaController.php',
            type: 'POST',
            data: {
                action: 'read',
                institucion: 'Antel'
            },
            dataType: 'json',
            success: function (response) {
                console.log(response);

                let areas = response;
                let sectionAreaList = $('.section-area-list');
                sectionAreaList.empty(); // Limpiar contenido previo.
    
                areas.forEach(res => {
                    let sectionGetAreas = $(`
                        <div class="section-get-areas">
                            <div id="area-item">
                                <p>${res.codigo}</p>
                                <p>${res.institucion_perteneciente}</p>
                                <p>${res.nombre}</p>
                                <p>${res.estado}</p>
                                <img src="../../img/icon-lapiz.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
                                <img src="../../img/icon-papelera.png" style="width: 3rem; height: 100%; margin: 0 0.5rem;">
                            </div>
                        </div>
                    `);
                    /*Enviar los resultados dentro del contenedor para mostrarlos*/ 
                    sectionAreaList.append(sectionGetAreas);
                });

                //Funciones para cambiar entre area y servicios
                function changeToArea() {
                    $('.btn-change-servicios').on('click', function () {
                        $('.section-area-list').css('display', 'none');
                        $('.section-services-list').css('display', 'inherit');
                        $('.btn-change-area').removeClass('btn-selected');
                        $('.btn-change-servicios').addClass('btn-selected');

                        //Cambiar la data de la info
                        $('.section-usuario-data').css('display', 'flex');
                        $('.section-area-data').css('display', 'none');
                    });
                }

                function changeToServicios() {
                    $('.btn-change-area').on('click', function () {
                        $('.section-area-list').css('display', 'inherit');
                        $('.section-services-list').css('display', 'none');
                        $('.btn-change-area').addClass('btn-selected');
                        $('.btn-change-servicios').removeClass('btn-selected');

                        //Cambiar la data de la info
                        $('.section-usuario-data').css('display', 'none');
                        $('.section-area-data').css('display', 'flex');
                    });
                }


                // Llamar a la función para manejar el evento de clic
            changeToArea();
            changeToServicios();


            },
            error: function (xhr, status, error) {
                console.error('Error en la solicitud AJAX:', status, error);
                console.error('Respuesta del servidor:', xhr.responseText);
            }
        });
    }
});