$(document).ready(function () {
    addScrolled();
})
$(window).scroll(function () {
    addScrolled();
});
function addScrolled() {

    if ($(window).scrollTop() > $('#main-menu').outerHeight()) {
        $('#main-menu').addClass('scroll');
    } else {
        $('#main-menu').removeClass('scroll');
    }
}
