$(document).ready(function() {
    var link = $('.menu-link');

    link.onclick(function() {
        link.toggleClass('menu-link_active');
    });

});