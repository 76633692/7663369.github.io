$(document).ready(function(){
    $('ul.menu-inicio-pestania li a:first').addClass('active');
    $('.grid-contenedor').hide();
    $('.grid-contenedor:first').show();

    $('ul.menu-inicio-pestania li a').click(function(){
        $('ul.menu-inicio-pestania li a').removeClass('active');
        $(this).addClass('active');
        $('.grid-contenedor').hide();

        var activePestania = $(this).attr('href');
        $(activePestania).show();
        return false
    })
})