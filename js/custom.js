'use strict';

// Open/close hidden menu
const btnHamburger = document.querySelector('header .button_hamburger');
const menuOpen = document.getElementById('menu-hidden__wrap');
btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle('active-menu');
    menuOpen.classList.toggle('open');
});

// SLIDER1
const prev = document.getElementById('tariffs__btn-prev');
const next = document.getElementById('tariffs__btn-next');
const slides = document.querySelectorAll('.tariffs__slide');
const dots = document.querySelectorAll('.tariffs__dot');

let index = 0;


const prepareCurrentSlide = ind=> {
    activeSlide(index);
    activeDots(index);
};

const activeSlide = i => {
   
    slides.forEach(slide => {
        slide.classList.remove('tariffs__slide-active')
    });
    slides[i].classList.add('tariffs__slide-active');
};

const activeDots = w => {
    dots.forEach(dot => {
        dot.classList.remove('tariffs__dot-active')
    });
    dots[w].classList.add('tariffs__dot-active');
};
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// SLIDER2
const prev2 = document.getElementById('tariffs__btn-prev2');
const next2 = document.getElementById('tariffs__btn-next2');
const slides2 = document.querySelectorAll('.tariffs__slide2');
const dots2 = document.querySelectorAll('.tariffs__dot2');

let index2 = 0;
const prepareCurrentSlide2 = ind=> {
    activeSlide2(index2);
    activeDots2(index2);
};
const activeSlide2 = t => {
    slides2.forEach(slide => slide.classList.remove('tariffs__slide-active2'));
    slides2[t].classList.add('tariffs__slide-active2');
};
const activeDots2 = m => {
    dots2.forEach(dot =>  dot.classList.remove('tariffs__dot-active2') )
    dots2[m].classList.add('tariffs__dot-active2');
};

const nextSlide2 = () => {
    if(index2 == slides2.length - 1) {
        index2 = 0;
        prepareCurrentSlide2(index2);
    } else {
        index2++;
        prepareCurrentSlide2(index2);
    }
};
const prevSlide2 = () => {
    if(index2 == 0) {
        index2 = slides2.length - 1;
        prepareCurrentSlide2(index2);
    } else {
        index2--;
        prepareCurrentSlide2(index2);
    }
};
dots2.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index2 = indexDot;
        prepareCurrentSlide2(index2);
    })
});
next2.addEventListener('click', nextSlide2);
prev2.addEventListener('click', prevSlide2);


// SECTION TARIFFS
const filtNewbud = document.getElementById("filt-newbud"),
    filtSecondbud = document.getElementById("filt-secondbud"),
    switcher = document.getElementById("switcher"),
    newbud = document.getElementById("newbud"),
    secondbud = document.getElementById("secondbud");

  filtNewbud.addEventListener("click", function(){
  switcher.checked = false;
  filtNewbud.classList.add("toggler-active");
  filtSecondbud.classList.remove("toggler-active");
  newbud.classList.remove("tariffs-hide");
  secondbud.classList.add("tariffs-hide");
});

filtSecondbud.addEventListener("click", function(){
  switcher.checked = true;
  secondbud.classList.add("toggler-active");
  filtNewbud.classList.remove("toggler-active");
  newbud.classList.add("tariffs-hide");
  secondbud.classList.remove("tariffs-hide");
});

switcher.addEventListener("click", function(){
  filtSecondbud.classList.toggle("toggler-active");
  filtNewbud.classList.toggle("toggler-active");
  newbud.classList.toggle("tariffs-hide");
  secondbud.classList.toggle("tariffs-hide");
})

// SECTION QUESTIONS
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("question-active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}

// GALLERY
let smallImg = document.querySelectorAll('.services-gallery__item img');
smallImg.forEach(function(img, i) {
    smallImg[i].addEventListener('click', function() {
        let src = this.getAttribute('src');
        let alt = this.getAttribute('alt');

        let bigImgParent = this.closest('.services-gallery');
        let bigImg = bigImgParent.querySelector('.services-gallery__img--big img');

        bigImg.setAttribute('src', src);
        bigImg.setAttribute('alt', alt);
    });
});

// TEAM
const teamPositions = document.getElementById('team__positions');
const teamPositionsItem = teamPositions.querySelectorAll('.team__positions-item');

teamPositions.addEventListener('click', e => {
    const target = e.target;

    if(target.matches('.team__positions-item')) {
       removeActiveElement();
       target.classList.add('positions-active'); 
    }
    const currentPosition = e.target.dataset.tab;
    let teamWorker = document.querySelectorAll('.team__worker');
    for(let i = 0; i < teamWorker.length; i++) {
        teamWorker[i].classList.remove('worker-active');
        if(teamWorker[i].dataset.content === currentPosition) {
            teamWorker[i].classList.add('worker-active');
        }
    }
});

const removeActiveElement = () => {
    teamPositionsItem.forEach(elem => elem.classList.remove('positions-active'));
};