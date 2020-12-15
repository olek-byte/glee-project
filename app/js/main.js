$(function(){

  // console.log("rabotaet!");

  // Nav button click
  $('.menu__nav-btn').on('click', function(){
   	$('.header__inner').toggleClass('header__inner--active')
  });


  // Fixed header
  let header = $('.header');
  let topSlider = $('.top-slider');
  let topSliderH = topSlider.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll", function(){
    scrollPos = $(this).scrollTop();
    console.log(scrollPos);

    if( scrollPos > topSliderH ) {
      header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }

  });


  // Slider
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    // fade: true,
    // autoplay: true,
    // autoplaySpeed: 3000
  });


  $('.partners__list').slick({
    // settings: "unslick",
  // dots: false,
  // infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
    dots: true,
        arrows: false,
    responsive: [
     {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });


 

  // Mixitup
  var mixer = mixitup('.products__inner');
  var mixer = mixitup('.design__inner');

});
