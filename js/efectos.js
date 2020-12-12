$(document).ready (function(){
    /* Efecto del menu */
    $('header .menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': 0
        }, 2000 + (index * 500));
    });

    /* Scroll */
    var acercaDE = $('#acerca-de').offset().top,
        servicios = $('#servicios').offset().top,
		disenos = $('#disenos').offset().top,
		contacto = $('#contacto').offset().top;

    $('#btn-acerca').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDE
        }, 500);
    });

    $('#btn-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios -170
        }, 500);
    });
    
    $('#btn-disenos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: disenos +150
        }, 500);
    });
    
    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });

    /* scroll efecto */

    let progress = document.getElementById('progressbar');
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function(){
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
    }
});