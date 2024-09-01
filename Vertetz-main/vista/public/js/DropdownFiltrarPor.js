function dropdownFiltrarPor() {
    $(document).ready(function () {
        $('.btnFiltrarPor').on('click', function () {
            $('.dropdown-content-filtrar').toggleClass('show');
        });

        $(window).on('click', function (event) {
            if (!$(event.target).closest('.btnFiltrarPor').length && !$(event.target).closest('.dropdown-mes-especifico').length) {
                $('.dropdown-content-filtrar').removeClass('show');
                resetDropdownState();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const mesEspecificoToggle = document.querySelector('.mes-especifico-toggle');
    const dropdownMesEspecifico = document.querySelector('.dropdown-mes-especifico');

    mesEspecificoToggle.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        dropdownMesEspecifico.classList.toggle('active');
    });
});

function resetDropdownState() {
    const dropdownMesEspecifico = document.querySelector('.dropdown-mes-especifico');
    dropdownMesEspecifico.classList.remove('active');
}

dropdownFiltrarPor();