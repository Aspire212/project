/*--------------------SLIDER FADE------------------*/
const click = document.querySelector('.wrapper');
const slide = document.querySelectorAll('.slide');
const doted = document.querySelector('.doted');
const slides = document.querySelector('.slides');
let curentClick = 0;
let autoPlay;
/*-----------------EVENT-----------------*/

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    /*------'HIDDEN BTN prev and next-----------*/
    document.querySelector('.prev').style.display = "none";
    document.querySelector('.next').style.display = "none";
    setInterval(sliderMbile, 2500);

} else {
    sliderDesktop();
    autoPlay = setInterval(nextSlide, 2500);
}

function sliderDesktop() {
    click.addEventListener('click', slider);
}

function slider(event) {
    if (event.target.classList.contains('next')) {
        clearInterval(autoPlay);

        /*-------------NEXT SLIDE----------------*/
        nextSlide();
        autoPlay = setInterval(nextSlide, 2500);
    }
    /*-------------PREVIOUS SLIDE----------*/

    if (event.target.classList.contains('prev')) {
        clearInterval(autoPlay);
        removeSlideActive();
        curentClick--;
        if (curentClick <= 0 - 1) {
            curentClick = slide.length - 1;
            removeSlideActive();
        }
        slide[curentClick].classList.add('slide_active');
        autoPlay = setInterval(nextSlide, 2500);
    }
    colorDoted();
    /*------------CLICK DOTS-------------*/

    if (event.target.classList.contains('dots')) {
        clearInterval(autoPlay);
        clickDots();
    }
}

/*FUNCTION*/
/*function removeSlideActive() {
    slide.forEach(elem => {
        elem.classList.remove('slide_active');
    })
}*/

function removeSlideActive() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('slide_active');
    }
}

function sliderMbile() {
    nextSlide();
}

function nextSlide() {
    curentClick++;
    removeSlideActive();
    if (curentClick >= slide.length) {
        curentClick = 0;
        removeSlideActive();
    }
    slide[curentClick].classList.add('slide_active');
    for (let i = 0; i <= slides.children.length - 1; i++) {

        if (slides.children[i].classList.contains('slide_active')) {

            colorDoted();
        }
    }
}

function clickDots() {
    for (let j = 0; j <= doted.children.length - 1; j++) {
        if (doted.children[j].classList.contains('dots_active')) {
            doted.children[j].classList.remove('dots_active');
            if (slides.children[j].classList.contains('slide_active')) {
                slides.children[j].classList.remove('slide_active');
            }
        }
        if (event.target == doted.children[j]) {

            doted.children[j].classList.add('dots_active');
            slides.children[j].classList.add('slide_active');
            curentClick = j;
        }
    }
    autoPlay = setInterval(nextSlide, 1500);
}

function colorDoted() {
    for (let i = 0; i <= slides.children.length - 1; i++) {

        if (slides.children[i].classList.contains('slide_active')) {

            for (let j = 0; j <= doted.children.length - 1; j++) {
                if (j == i) {
                    doted.children[i].classList.add('dots_active');
                } else if (doted.children[j].classList.contains('dots_active')) {
                    doted.children[j].classList.remove('dots_active');
                }
            }
        }
    }
}