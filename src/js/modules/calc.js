function calc() {
    // Calculator

const result = document.querySelector('.calculating__result span');

let sex = 'female', height, weight, age, ratio = 1.375;

if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
}
if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
}

function intiCalc(selector, classActive) {
    const elements = document.querySelectorAll(`${selector} div`);

    elements.forEach(elem => {
        elem.classList.remove(classActive);
        if(elem.getAttribute('data-ratio') === ratio) {
            elem.classList.add(classActive);
        }
        if(elem.getAttribute('id') === sex) {
            elem.classList.add(classActive);
        }
    });
}


intiCalc('#gender', 'calculating__choose-item_active');
intiCalc('#daily-active', 'calculating__choose-item_active');


function calcTotal() {
    if (!sex ||  !height || !weight || !age || !ratio) {
        result.textContent = '____';
        return;
    }
    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
    
}

calcTotal();


function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {

        if(e.target.getAttribute('data-ratio')) {
            ratio = +e.target.getAttribute('data-ratio');
            localStorage.setItem('ratio', ratio);
        } else {
            sex = e.target.getAttribute('id');
            localStorage.setItem('sex', sex);
        }
        console.log(ratio, sex);
        elements.forEach(elem => elem.classList.remove(activeClass));
        e.target.classList.add(activeClass);

        calcTotal();
        });
    });
}
getStaticInformation('#gender div', 'calculating__choose-item_active');
getStaticInformation('#daily-active div', 'calculating__choose-item_active');

function getDynamicInformation(selector) {

    const input = document.querySelector(selector);
    
    input.addEventListener('input', e => {
        if (input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = '';
        }
        switch(input.getAttribute('id')) {
            case 'height': 
                height = +input.value;
                localStorage.setItem('height', height);
                break;
            case 'weight': 
                weight = +input.value;
                localStorage.setItem('weight', weight);
                break;
            case 'age': 
                age = +input.value;
                localStorage.setItem('age', age);
                break;
        }
        console.log(height, weight, age);
        calcTotal();
    });

}

getDynamicInformation('#height');
getDynamicInformation('#weight');
getDynamicInformation('#age');


// 
}

export default calc;