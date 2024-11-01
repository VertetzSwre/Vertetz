function modalEditUser() {
    const editUser = `
    
    <!-- Modal Edit User -->
  <div class="modal fade" 
  id="staticBackdrop" 
  data-bs-backdrop="static" 
  tabindex="-1" 
  aria-labelledby="staticBackdropLabel" 
  aria-hidden="true"
  >
  
    <div class="modal-dialog modal-dialog-scrollable custom-width-edit-user">
      <div class="modal-content" style="background-color: #F6EFFF; padding: 1rem; border-radius: 2rem;">
       
        <div class="modal-body">
          <section class="section-edit-user">
            <form class="form-edit-user">

              <h1 class="h1-edit-perfil">Editar perfil</h1>
          <div class="line-edit-user"></div>

          <div class="row">
            <div class="col-3">
              <img src="../../../public/img/usuario.png" alt="user" class="img-edit-user">
            </div>
            <div class="col-9 d-flex-column align-items-left justify-content-center">
              <label for="btn-select-img-user" class="custom-file-upload">Cambiar foto de perfil</label>
              <input type="file" 
              accept="image/*" 
              name="img-edit-user" 
              alt="Boton para cambiar de imagen de perfil" 
              value="Cambiar foto de perfil"
              id="btn-select-img-user"
              >
              <span class="txt-file-upload">Ayuda a identificar quién eres más facilmente.</span>
            </div>
          </div>

                <div class="form-group">
                    <label for="area">Nombre completo *</label>
                    <input type="text" required>
                </div>

                <div class="form-group">
                    <label>Cédula *</label>
                    <input type="text" required>
                </div>

                <div class="form-group">
                    <label>Numero de teléfono *</label>
                    <input type="text" required>
                </div>

                <div class="form-group">
                    <label>Correo *</label>
                    <input type="text" required>
                </div>

                <div class="form-group">
                    <label>Correo institucional (opcional)</label>
                    <input type="text">
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

$(document).ready(function () {
    $('#btn-edit-user').on('click', function() {
        $('#staticBackdrop').modal("show");
    });

    modalEditUser();
});