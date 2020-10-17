import tabs from './modules/tabs';
import modal  from './modules/modal';
import timer  from './modules/timer';
import slider from './modules/slider';
import forms  from './modules/forms';
import cards  from './modules/cards';
import calc  from './modules/calc';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const timerModal = setTimeout(() => openModal('.modal', timerModal), 10000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', timerModal); 
    timer('.timer', '2020-10-23');
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
    forms('form', timerModal); 
    cards(); 
    calc();




});
