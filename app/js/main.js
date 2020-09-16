$(function () {

  var slider = new Swiper('.swiper-container', {
    speed: 1000,
    slidesPreView: 1,
    navigation: {
          nextEl: '.swiper__button-next',
          prevEl: '.swiper__button-prev',
        },
    pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
    loop: true,
});

var slider2 = new Swiper('.swiper-container-advantages', {
  wrapperClass: 'swiper__wrapper--advantages',
  slideClass: 'swiper__slide--advantages',
  speed: 1000,
  slidesPerView: 'auto',
  loopedSlides: 2,
});

var slider3 = new Swiper('.swiper-container-company', {
  wrapperClass: 'swiper__wrapper--company',
  slideClass: 'swiper-slide--company',
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.company-button-next',
    prevEl: '.company-button-prev',
  },
  speed: 1000,
  slidesPerView: 6,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    }
  }
});

var slider4 = new Swiper('.swiper-container-counter', {
  wrapperClass: 'swiper__wrapper--counter',
  slideClass: 'counter__item',
  speed: 1000,
  slidesPerView: 'auto',
  //preventInteractionOnTransition: true,
});

     /* 
     var slider = document.querySelector('.swiper-container');
    var slider2 = document.querySelector('.swiper__container--advantages');
    var slider3 = document.querySelector('.swiper__container--company');

    var mySwiper = new Swiper(slider, {
        speed: 1000,
        slidesPreView: 1,
        navigation: {
          nextEl: '.swiper__button-next',
          prevEl: '.swiper__button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        loop: true,
      });

       var mySwiper2 = new Swiper(slider2, {
        speed: 1000,
        slidesPreView: 5,
        loop: true,
        allowSlidePrev: false,
        allowSlideNext: false,
      });
     
     
     
     
     
     
     
     
     
     
     
     
     var mySwiper3 = new Swiper(slider3, {
        speed: 1000,
        slidesPreView: 6,
        navigation: {
          nextEl: '.company-button-next',
          prevEl: '.company-button-prev',
        },
        loop: true,
        spaceBetween: 10,
      });*/


      $('.header__btn--adaptive').on('click', function(){
        $('.menu__list').toggleClass('active');
      });

      $('.menu__search--btn').on('click', function(){
        $('.menu__input').toggleClass('active');
      });


var check = 1;
var target = $('.counter'); // You counter class
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$(window).scroll(function() {
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem && check) {
    
    $('.counter__item--title').each(function(){
      $(this).prop('Counter', 0).animate({
        Counter:$(this).text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function (now){
          $(this).text(Math.ceil(now));
        }
      });
    });
    check = 0;
  }
});

      new WOW().init();
});
/*  

$('.menu__list--item').on('click', function(){
        $('.menu__list--dropdown').toggleClass('active');
      });
 
*/



