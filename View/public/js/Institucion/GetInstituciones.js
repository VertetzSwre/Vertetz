$(document).ready(function () {
  getAllInstituciones();

  function getAllInstituciones() {
    $.ajax({
      url: "../../../../Controller/Institucion/InstitucionController.php",
      type: "POST",
      data: {
        action: "instituciones",
      },
      dataType: "json",
      success: function (response) {
        console.log(response);

        let instituciones = response;
        let sectionInstitutionList = $(".reservation-options");
        sectionInstitutionList.empty(); // Limpiar contenido previo.
        let count = 0;
        instituciones.forEach((res) => {
          // Generar el div con un id dinámico basado en el valor de "count"
          let sectionGetInstitutions = $(`
						  <div class="reservation-particular-item" id="${count}">
						  <p class="reservation-particular-txt">${res.nombre}</p>
						  </div>
					  `);

          // Evento click para guardar el id del div en LocalStorage
          sectionGetInstitutions.on("click", function () {
            // Guardar el ID del div en LocalStorage
            localStorage.setItem("selectedDivId", $(this).attr("id"));
            // Redirigir a otra página
            window.location.href = "ManageInstitucion.html";
          });

          /*Enviar los resultados dentro del contenedor para mostrarlos*/
          sectionInstitutionList.append(sectionGetInstitutions);
          count++;
        });
      },
      error: function (xhr, status, error) {
        console.error("Error en la solicitud AJAX:", status, error);
        console.error("Respuesta del servidor:", xhr.responseText);
      },
    });
  }
});
