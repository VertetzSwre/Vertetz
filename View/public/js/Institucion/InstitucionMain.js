$(document).ready(function () {
    // Obtener el id del div almacenado en LocalStorage
    let selectedDivId = localStorage.getItem("selectedDivId");
  
    if (selectedDivId) {
      console.log("ID del div seleccionado:", selectedDivId);
      getInstitucion(selectedDivId);  // Llamar a la función para obtener la institución
    } else {
      console.error("No se encontró el id del div seleccionado.");
    }
  
    // Opción para borrar el LocalStorage solo cuando ya no necesites el id
    $("#finalizarAccion").on("click", function () {
      localStorage.removeItem("selectedDivId");
    });
  
    function getInstitucion(id) {
      $.ajax({
        url: "../../../../Controller/Institucion/InstitucionController.php",
        type: "POST",
        data: {
          action: "instituciones",
        },
        dataType: "json",
        success: function (response) {
          // Suponiendo que `response` es un array de instituciones
          let institucion = response[id];  // Acceder al elemento del array por su índice
  
          if (institucion) {
            let institucionName = institucion.nombre;  // Acceder a la propiedad nombre de la institución
            console.log(institucionName);
  
            // Ahora hacer una segunda solicitud para obtener más detalles sobre la institución
            $.ajax({
              url: "../../../../Controller/Institucion/InstitucionController.php",
              type: "POST",
              data: {
                action: "institucionByName",
                nombre: institucionName,  // Pasar solo el nombre como valor
              },
              dataType: "json",
              success: function (response) {
                let ManageInstitucionContainer = $(".all-container");
                // ManageInstitucionContainer.empty(); // Limpiar contenido previo
  
                // Suponiendo que `response` es la información detallada de la institución
                response.forEach((res) => {
                  let institucionNombre = $(`
                    <h1 class="h1-gestionar-instituciones">Gestiona ${res.nombre}</h1>
                  `);
                  ManageInstitucionContainer.prepend(institucionNombre);  // Añadir al contenedor
                });
              },
              error: function (xhr, status, error) {
                console.error("Error en la solicitud AJAX:", status, error);
                console.error("Respuesta del servidor:", xhr.responseText);
              },
            });
          } else {
            console.error("La institución con el id proporcionado no existe.");
          }
        },
        error: function (xhr, status, error) {
          console.error("Error en la solicitud AJAX:", status, error);
          console.error("Respuesta del servidor:", xhr.responseText);
        },
      });
    }
  });
  