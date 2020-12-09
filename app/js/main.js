$(function(){

    $('.menu__nav-btn, .menu a').on('click', function(){
   		 $('.header__inner').toggleClass('header__inner--active')
 	  });



  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    // fade: true,
    // autoplay: true,
    // autoplaySpeed: 3000

  });



  var mixer = mixitup('.products__inner');
  
  var mixer = mixitup('.design__inner');
});