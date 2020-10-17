import {closeModal, openModal} from './modal';
import {postData} from '../services/services';
function form(formSelector, timerModal) {
    // Send Form for server


const forms = document.querySelectorAll(formSelector),
message = {
    loading : 'img/form/spinner.svg',
    success : 'Спасибо, в скорем временни наш менеджер с вами свяжется',
    failure : 'Что-то пошло не так, попробуйте позже(',
};



function sendForm(forms) {

forms.forEach(form => {
    form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const statusMessage = document.createElement('img');
    statusMessage.src = message.loading;
    statusMessage.style.cssText = `
    display: block;
    margin: 0 auto; 
    `;

    form.insertAdjacentElement('afterend', statusMessage);

    const formData = new FormData(form),
    json = JSON.stringify(Object.fromEntries(formData.entries()));
    
    postData('http://localhost:3000/requests', json)
    .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
    }).catch(() => {
        showThanksModal(message.failure);
    }).finally(() => {
        form.reset();
    });

    });
});

}

function showThanksModal(message) {
const prevModalDialog = document.querySelector('.modal__dialog');

prevModalDialog.classList.add('hide');
openModal('.modal', timerModal);

const thanksModal = document.createElement('div');
thanksModal.classList.add('modal__dialog');
thanksModal.innerHTML = `
    <div class='modal__content'>
        <div data-close class='modal__close'>×</div>
        <div class='modal__title'>${message}</div>
    </div>
`;

document.querySelector('.modal').append(thanksModal);

setTimeout(() =>{
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hide');
    closeModal('.modal');
   
}, 3000);
}

sendForm(forms);
}

export default form;