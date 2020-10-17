import {getZero} from './timer';
function slider({container, slide, nextArrow, prevArrow, currentCounter, wrapper, field}) {
    // Slaider 

const   sliderElement = document.querySelectorAll(slide),
slider = document.querySelector(container),
current = document.querySelector(currentCounter),
prev = document.querySelector(prevArrow),
next =  document.querySelector(nextArrow),
slidesWrapper = document.querySelector(wrapper),
slidesField = document.querySelector(field),
width = window.getComputedStyle(slidesWrapper).width;


function activeDots() {
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex-1].style.opacity = '1';
}

function DeleteNotDigits(str) {
    return +str.replace(/\D/g, ''); 
}   

let slideIndex = 1,
    offset = 0,
    numberElement = sliderElement.length;

slidesWrapper.style.overflow = 'hidden';
slidesField.style.width = 100 * numberElement + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

sliderElement.forEach(slide =>{
    slide.style.width = width;  
});

slider.style.position = 'relative';

const   indicators = document.createElement('ol'),
dots = [];  
indicators.classList.add('carousel-indicators');
indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
`;

slider.append(indicators);

for (let i = 0; i < numberElement; i++ ) {
const dot = document.createElement('li');
dot.setAttribute('data-slide-to', i+1);
dot.style.cssText = `
box-sizing: content-box;
flex: 0 1 auto;
width: 30px;
height: 6px;
margin-right: 3px;
margin-left: 3px;
cursor: pointer;
background-color: #fff;
background-clip: padding-box;
border-top: 10px solid transparent;
border-bottom: 10px solid transparent;
opacity: .5;
transition: opacity .6s ease;
`;
if (i ==0) {
dot.style.opacity = 1;
}
indicators.append(dot);
dots.push(dot);
}

next.addEventListener('click', () => {
if (offset == DeleteNotDigits(width) * (numberElement-1)) {
offset = 0;
} else {
offset += DeleteNotDigits(width);
}
if (slideIndex == numberElement) {
slideIndex = 1;
} else {
slideIndex++;
}
current.textContent = getZero(slideIndex);
slidesField.style.transform = `translateX(-${offset}px)`;

activeDots();

});

prev.addEventListener('click', () => {
if (offset == 0) {
offset = DeleteNotDigits(width) * (numberElement-1);
} else {
offset -= DeleteNotDigits(width);
}
if (slideIndex == 1) {
slideIndex = numberElement;
} else {
slideIndex--;
}
current.textContent = getZero(slideIndex);
slidesField.style.transform = `translateX(-${offset}px)`;
activeDots();
});

dots.forEach(dot => {
dot.addEventListener('click', (e) => {
const slideTo = e.target.getAttribute('data-slide-to');
slideIndex = slideTo;

offset = DeleteNotDigits(width) * (slideTo-1);

slidesField.style.transform = `translateX(-${offset}px)`;

activeDots();

current.textContent = getZero(slideIndex);
});
});


}

export default slider;