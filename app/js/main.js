$(function () {

  // SHOP-PAGE

  // FILTER PRICE
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
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
  $('.js__btn-icon').on('click', function () {
    $('.filters-menu').toggleClass('filters-menu--active');
  });

  // FILTER BTNs
  $('.js__filter-btn').on('click', function () {
    $('.js__filter-btn').removeClass('active');
    $(this).addClass('active');
  });

  // GRID BTNS
  $('.btn-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
  });

  // //  LIST BTNS
  $('.btn-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
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
  $('.product-tabs__link').on('click', function () {
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
    responsive: [{
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
    responsive: [{
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
  $('.js-menu__nav-btn').on('click', function () {
    $('.header__inner').toggleClass('active')
    $('body').toggleClass('locked')
  });


  //HOME__LINK
  $('.home-menu').on('click', function () {
    $(this).next().slideToggle();
  });

  const menuBtn = $('.home-menu'),
    menu = $('.home-submenu');

  menuBtn.on('click', function () {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      menu.slideUp();
    } else {
      $(this).addClass('is-active');
      menu.slideDown();
    }
  });

  $(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.slideUp();
      menuBtn.removeClass('is-active');
    };
  });


  // PAGE__LINK
  $('.page-menu').on('click', function () {
    $(this).next().slideToggle();
  });

  const menuBtns = $('.page-menu'),
    menus = $('.page-submenu');

  menuBtns.on('click', function () {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      menus.slideUp();
    } else {
      $(this).addClass('is-active');
      menus.slideDown();
    }
  });

  $(document).click(function (e) {
    if (!menuBtns.is(e.target) && !menus.is(e.target) && menus.has(e.target).length === 0) {
      menus.slideUp();
      menuBtns.removeClass('is-active');
    };
  });


  // Fixed header
  let header = $('.header');
  let products = $('.products, .page-top');
  let productsH = products.innerHeight();
  let scrollPos = $(window).scrollTop();

  document.addEventListener('scroll', function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > productsH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  // Smooth scroll
  $(".link").on("click", function () {
    var className = $(this).attr('href'),
      top = $(className).offset().top;
    $('body,html').animate({
      scrollTop: top - 70
    }, 1500);
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
    responsive: [{
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

  var mixer = mixitup('.products__inner', {
    selectors: {
      target: '.product-card',
      control: '.filter__btn'
    }
  });

  var mixer2 = mixitup('.design__inner', {
    selectors: {
      target: '.design-card',
      control: '.filter__btn2'
    }
  });

});