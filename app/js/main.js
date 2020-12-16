$(function(){

  // Nav button click
  $('.menu__nav-btn').on('click', function(){
   	$('.header__inner').toggleClass('header__inner--active')
  });

  // Fixed header
  let header = $('.header');
  let products = $('.products');
  let productsH = products.innerHeight();
  let scrollPos = $(window).scrollTop();

  document.body.addEventListener('scroll', function() {
    scrollPos = $(this).scrollTop();

    if( scrollPos > productsH ) {
      header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }
  });

  // Smooth scroll
  $(".menu__link, .logo").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 70 }, 1500);
	});



  // Slider
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });


  $('.partners__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right.svg" alt="arrow right"></button>',
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
             
          }
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
          }
        },
                {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          }
        }

      ]
  });


 

  // Mixitup
  var mixer = mixitup('.products__inner');
  var mixer = mixitup('.design__inner');

});
