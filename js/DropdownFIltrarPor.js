function dropdownFiltrarPor() {
    $(document).ready(function () {
        $('.btnFiltrarPor').on('click', function () {
            $('.dropdown-content-filtrar').toggleClass('show');
        });
    
        $(window).on('click', function (event) {
            if (!$(event.target).closest('.btnFiltrarPor').length) {
                $('.dropdown-content-filtrar').removeClass('show');
            }
        });
    });
}

dropdownFiltrarPor();

