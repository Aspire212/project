
//-----------------------------BURGER--------------------------------

const burgertn = document.querySelector('.burger');
const strips = document.querySelector('.strips');
const dropMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

burgertn.addEventListener('click', function() {
    strips.classList.toggle('strips_active');
    dropMenu.classList.toggle('menu_active');
    body.classList.add('body__lock')

    if (strips.classList.contains('strips_active') == false) {
        body.classList.remove('body__lock');
    }
})

/*----------Swiper js----------*/

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  updateOnWindowResize: true,
  roundLengths: true,

  speed: 400,
  autoplay:{delay: 4000,
    disableOnInteraction: false,
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  
})