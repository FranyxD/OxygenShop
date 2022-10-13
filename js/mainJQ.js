//capturarel % de scroll webpage
$(window).on('scroll',function(){
        let wintop = $(window).scrollTop(), 
        docHeight = $(document).height(),
        winHeight = $(window).height();
    
        let scroll = (wintop / (docHeight - winHeight)) * 100;
    
        $('.scroll-line').css('width', (scroll + '%'));
    });


