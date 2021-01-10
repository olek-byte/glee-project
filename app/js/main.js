$(function(){

  // SHOP-PAGE

  // FILTER PRICE
  $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
    onStart: function(data) {
      $('.filter-price__from').text(data.from.toFixed(2));
      $('.filter-price__to').text(data.to.toFixed(2));
      },
     onChange: function (data) {
      $('.filter-price__from').text(data.from.toFixed(2));
      $('.filter-price__to').text(data.to.toFixed(2));
    }
  });

  // RATEYO
  $(".star--small").rateYo({
    rating: 3.6,
    starWidth: "12px",
    spacing: "6px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $(".star--big").rateYo({
    rating: 3.6,
    starWidth: "18px",
    spacing: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  // SETTINGS Icon in Shop Page
  $('.filters-menu__btn-icon').on('click', function() {
    $('.filters-menu').toggleClass('filters-menu--active');
    // $('.shop-filters').toggleClass('shop-filters--active');
  });


   $('.menu-right__icon').on('click', function() {
    $('.menu-right').toggleClass('menu-right--active');
    // $('.blog-page__filters').toggleClass('blog-page__filters--active');
  });

    // FILTER BTN
  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  // LIST & GRID BTNS
  $('.btn-list').on('click', function() {
    $('.product-card').toggleClass('product-card--list')
  });

  $('.btn-grid').on('click', function() {
     $('.product-card').toggleClass('product-card--list')
  });

  // PRODUCT_DETAILS

  // Top slider 
  $('.product-slide__small').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__small',
    draggable: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  

  // Numbers filter
  $('.details-filter__num').styler();

  // TABS in product details
  $('.product-tabs__link').on('click', function(){
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

  // related-products slider
  $('.related-products__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    appendArrows: $('.related-products__btns'),
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left-rel.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right-rel.svg" alt="arrow right"></button>',
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
            arrows: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
  });

  // ABOUT

  // slider
  $('.mission-info__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,      
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
  });

  // INDEX

  // Nav button click
  $('.menu__nav-btn').on('click', function(){
   	$('.header__inner').toggleClass('header__inner--active')
  });

  // SUBMENU
  // $('.main-menu').find('.menu__list > li').click(function(){
  //   $(this).find('ul')
  //   .stop(true, true).slideToggle(400); 
  //   return true      
  // });    

    $('.main-menu').find('.menu__list > .menu__item').click(function(){
    $(this).find('.submenu')
    .stop(true, true).slideToggle(400); 
    return true      
  });  

  // Fixed header
  let header = $('.header');
  let products = $('.products, .page-top');
  let productsH = products.innerHeight();
  let scrollPos = $(window).scrollTop();

  document.addEventListener('scroll', function() {
  scrollPos = $(this).scrollTop();

    if( scrollPos > productsH ) {
      header.addClass('fixed');
      } else {
        header.removeClass('fixed');
    }
  });

  // Smooth scroll
  $(".link").on("click", function () {
		var className = $(this).attr('href'),
		top = $(className).offset().top;
		$('body,html').animate({scrollTop: top - 70 }, 1500);
	});

  // top slider
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // partners slider
  $('.partners__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false, 
          }
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
  });

  // Mixitup
  var mixer = mixitup('.products__inner');
  var mixer = mixitup('.design__inner');

});