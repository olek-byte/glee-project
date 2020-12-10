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

//        $(".menu__list li ul").hide(); // скрываем выпадающее меню
//     $(".menu__list li:has('.menu__submenu')").hover(
//   function(){
//   $(".menu__list li ul").stop().fadeToggle(0);} /* отбираем элемент списка, который содержит элемент с классом .submenu и добавляем ему функцию при наведении, которая показывает и скрывает выпадающее меню */
// );



  var mixer = mixitup('.products__inner');
  
  var mixer = mixitup('.design__inner');
});