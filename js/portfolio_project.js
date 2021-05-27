// PORTFOLIO PROJECT
let slides = document.getElementsByClassName('project__slider');
let slidescount = 0;
let totalSlide = slides.length;

document.getElementById('project__slide-prev').addEventListener('click', () => {
    prevSlide()
});
document.getElementById('project__slide-next').addEventListener('click', () => {
    nextSlide()
});

