function openFilter() {
    $('.btn-filter').click(function () {
        $('.filter-container').toggleClass('show');
        $('.filter-arrow').toggleClass('rotate');
    });
}

$(document).ready(function () {
    openFilter();
});
