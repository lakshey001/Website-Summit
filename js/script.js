$(document).scroll(function(){
  $(".navbar").toggleClass("navi",$(this).scrollTop()>100);
  
   $(".img-1").toggleClass("img-2",$(this).scrollTop()>650);
});
$(document).scroll(function(){

   $(".navbar").toggleClass("nav-small",$(this).scrollTop()>650);
  
});



function smoothScroll(e){
    e.preventDefault();
    const target = $($(this).attr('href'));
    $('html,body').animate({
        scrollTop:target.offset().top
    },700,function(){
            target.focus();
            if(target.is(':focus')){
                return false;
            }else{
                target.attr('tabindex','-1');
                target.focus();
            }
        }
    );
}


$(document).ready(function(){
    $("#img-1").hover(function(){
        $(this).css("filter", "invert(0)");
        }, function(){
        $(this).css("filter", " brightness(0) invert(1)");
    });
});
$(document).ready(function(){
    $("#img-2").hover(function(){
        $(this).css("filter", "invert(0)");
        }, function(){
        $(this).css("filter", " brightness(0) invert(1)");
    });
});
$(document).ready(function(){
    $("#img-3").hover(function(){
        $(this).css("filter", "invert(0)");
        }, function(){
        $(this).css("filter", " brightness(0) invert(1)");
    });
});

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}
$(document).ready(function(){
    $('.animate').each(function() {
        animationHover(this, 'slideInLeft');
    });
});

  
 
