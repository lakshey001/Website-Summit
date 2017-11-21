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


$('#mynav a').on('click',smoothScroll);
$(".navbar-brand a").on('click',smoothScroll);
