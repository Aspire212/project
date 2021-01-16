window.addEventListener("DOMContentLoaded", function(){
/*-----------------------------BURGER--------------------------------*/
const burgerBtn = document.querySelector('.burger');
const strips = document.querySelector('.strips');
const dropMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
let namePage;

burgerBtn.addEventListener('click', eBurger);
function eBurger(){
    
    strips.classList.toggle('strips_active');
    dropMenu.classList.toggle('menu_active');
    body.classList.add('body__lock')

    if (!strips.classList.contains('strips_active')) {
        body.classList.remove('body__lock');
    }
}

});