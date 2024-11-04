function modalEditUser() {
    const editUser = `
    
    <!-- Modal Edit User -->
  <div class="modal fade" 
  id="staticBackdrop" 
  data-bs-backdrop="static" 
  data-bs-keyboard="false" 
  tabindex="-1" 
  aria-labelledby="staticBackdropLabel" 
  aria-hidden="true"
  >
  
    <div class="modal-dialog modal-dialog-scrollable custom-width-edit-user id="editUserModal" aria-labelledby="editUserModalLabel" aria-hidden="true">
      <div class="modal-content" style="background-color: #F6EFFF; padding: 1rem; border-radius: 2rem;">
       
        <div class="modal-body" style="overflow-y: hidden;">
          <section class="section-edit-user">
            <form class="form-edit-user" id="form-edit-user">

              <h1 class="h1-edit-perfil">Editar perfil</h1>
          <div class="line-edit-user"></div>

          <div class="row">
            <div class="col-3">
              <div class="container-img-edit-user">
                <img src="../../../public/img/usuario.png" alt="user" class="img-edit-user" id="img-user"></div>
              </div>
            <div class="col-9 d-flex-column align-items-left justify-content-center">
              <span class="custom-file-upload">
                Cambiar foto de perfil
                
                <input 
                type="file" 
                accept="image/*" 
                name="img-edit-user" 
                alt="Boton para cambiar de imagen de perfil" 
                value="Cambiar foto de perfil"
                id="btn-select-img-user"
                >
              </span> 
              
              <span class="txt-file-upload">Ayuda a identificar quién eres más facilmente.</span>
            </div>
          </div>

                <div class="form-group">
                    <label for="area">Nombre completo *</label>
                    <input type="text" required id="nombre_completo">
                </div>

                <div class="form-group">
                    <label>Cédula *</label>
                    <input type="text" required id="ci">
                </div>

                <div class="form-group">
                    <label>Numero de teléfono *</label>
                    <input type="text" required id="telefono">
                </div>

                <div class="form-group">
                    <label>Correo *</label>
                    <input type="text" required id="mail_personal">
                </div>

                <div class="form-group">
                    <label>Correo institucional (opcional)</label>
                    <input type="text" id="mail_corporativo">
                </div>

                <div class="form-group">
                  <!--Este queda vacio para que quede bien-->
              </div>

              <section class="section-submit-btn">
                <button class="btn-save-edit-user" type="submit" id="save-user-edit">Guardar</button>
                <button class="btn-save-edit-user" data-bs-dismiss="modal">Cancelar</button>
            </section>
            </form>
        </section>
        </div>
      </div>
    </div>
  </div>
    
    `;
    $('body').prepend(editUser);
}

  // * Obtener los datos del area y mostrar modal para editarla
  $(document).on("click", ".btn-edit-user", function () {
    //Obtener valores de el area a editar
    const codigo = $(this).data("codigo");
    const nombre = $(this).data("nombre");
    const estado = $(this).data("estado");

    //Insertar los valores del area en los campos del modal
    $("#edit-codigo").val(codigo);
    $("#edit-nombre").val(nombre);
    $("#edit-estado").val(estado);
    $("#save-area-changes").data("codigo", codigo);
    $("#editAreaModal").modal("show");
  });

//AJAX para actualizar el usuario en base a la información que se le pasa
$(document).ready(function () {
  // Carga el modal de edicion del usuario
  modalEditUser();

    $('#btn-edit-user').on('click', function() {
        $('#staticBackdrop').modal("show");
    });

      // * Enviar formulario de Editar Usuario
      $('#form-edit-user').submit(function (e) {
        e.preventDefault();
      const formData = {
        action: "update",
        nombre_completo: $("#nombre_completo").val(),
        ci: $("#ci").val(),
        telefono: $("#telefono").val(),
        mail_personal: $("#mail_personal").val(),
        mail_corporativo: $("#mail_corporativo").val(),
      };

    $.ajax({
      url: "../../../../Controller/Usuario/UsuarioController.php",
      type: "POST",
      data: formData,
      dataType: "json",
      success: function (response) {
        console.log("Usuario actualizado:", response);
        $("#editUserModal").modal("hide");
        getAreas(localStorage.getItem("selectedDivId"));
      },
      error: function (xhr, status, error) {
        console.error("Error al crear el área:", status, error);
        console.error("Respuesta del servidor:", xhr.responseText);
      },
    });
    });

    // Realizar una peticion AJAX para obtener los datos del usuario
    $.ajax({
      url: '../../../../Controller/Auth/AuthController.php',
      type: 'POST',
      data: {
        action: 'verificar_sesion'
      },
      dataType: 'json',
      success: function(response) {
        console.log(response);  
        if (response.logueado) {
        // Rellenar los campos del formulario de edicion del usuario
        $("#nombre_completo").val(response.usuario);
        $("#ci").val(response.ci);
        $("#telefono").val(response.telefono);
        $("#mail_personal").val(response.mail_personal);
        $("#mail_corporativo").val(response.mail_corporativo);
        } else {
          window.location.href = '../../html/Auth/Login.html'; // Redirigir si no está logueado
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error en la solicitud AJAX:', textStatus, errorThrown);
      }
    });

    // * Cambiar imagen de perfil
    const defaultFile = '../../../public/img/usuario.png';
    const img = document.getElementById('img-user');
    const file = document.getElementById('btn-select-img-user');
      file.addEventListener('change', function(e) {
        if ( e.target.files[0] ) {
          const reader = new FileReader();
          reader.onload = function(e) {
            img.src = e.target.result;
          };
          reader.readAsDataURL(e.target.files[0]);
        } else {
          img.src = defaultFile;
        }
      });
    });


