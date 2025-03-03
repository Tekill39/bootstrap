/*Портфолио Last work */
$(document).ready(function() {
    $('.button[filter]').click(function() {
      if($(this).attr('filter')=='all') {
        if($(this).attr('val')=='off') { 
           $('.button[filter]').attr('val','off');
           $(this).attr('val', 'on');
           $('button[filter]').removeClass('focused');
           $(this).addClass('focused');
           $('.filter > div').show(300);
        }
    } else
      if($(this).attr('val')=='off') {
            $('.button[filter]').attr('val','off');
            $(this).attr('val', 'on');
            $('button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(300);
            var filter=$(this).attr('filter');
            $('.filter > div[filter='+filter+']').show(300);
         }
    })  
    /*Слайдер*/
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      dots:true,
      dotsClass:'dots-style',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }); 
    /*menu*/
    $('ul.menu a[href^="#"').click(function(){
      var target=$(this).attr('href');
      $('html,body').animate({
        scrollTop:$(target).offset().top
      },500);
      $('ul.menu a[href^="#"').css({'color':'#212121'});
      $(this).css({'color':'#3949ab'});
      return false;
    })       
     /*выпадающее menu*/
     $('.menu-icon').click(function(){
       $('nav').slideToggle(500);
       $('ul.menu').css({
         'display':'flex','flex-direction':'column'})
       if($('.menu-icon').html()=='<i class="fa fa-bars" aria-hidden="true"></i>'){
         $(this).html('<i class="fa fa-times" aria-hidden="true"></i>')
       }else{
        $(this).html('<i class="fa fa-bars" aria-hidden="true"></i>')
       }
     })

     
     /*Кнопка вверх*/
     $(window).scroll(function(){
       if ($(this).scrollTop() !=0)
       $('#toTop').fadeIn();
       else 
       $('#toTop').fadeOut();
     });
     $('#toTop').click(function(){
       $('body,html').animate({
         scrollTop:0
       },800);
     }); 
})
