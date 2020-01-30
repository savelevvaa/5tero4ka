// Предыдущая редакция, так же рабочая
/*
$(document).ready(function(){
    $('.preloader').fadeOut('slow');
})
*/
$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut('slow');
})