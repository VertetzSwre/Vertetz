function modalEditUser() {
    const editUser = `
    
    <!-- Modal Edit User -->
  <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable custom-width-edit-user">
      <div class="modal-content" style="background-color: #F6EFFF; padding: 3rem; border-radius: 2rem;">
       
        <div class="modal-body">
          <h1 class="h1-edit-perfil">Editar perfil</h1>
          <div class="line-edit-user"></div>

          <section class="section-edit-user">
            <form class="form-edit-user">
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
    modalEditUser();
});