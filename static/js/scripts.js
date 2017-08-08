$(document).ready(function() {
    $('.tooltipped').tooltip({ delay: 10 });
    $(".button-collapse").sideNav({
        menuWidth: 250
    });
    $('.carousel').carousel();
    $(".type").typed({
        strings: ['Dreamer', 'Artist', 'Activist', 'Front End Web Developer'],
        startDelay: 900,
        typeSpeed: 100,
        loop: false
    });


});
