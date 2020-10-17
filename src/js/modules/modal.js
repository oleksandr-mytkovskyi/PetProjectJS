function closeModal(modalSeceltor) {
   const modal = document.querySelector(modalSeceltor);
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}

function openModal(modalSeceltor, modalTimerId) {
  const modal = document.querySelector(modalSeceltor);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  if(modalTimerId) {
      clearInterval(modalTimerId);
   }
}


function modal(triggerSelector, modalSeceltor, modalTimerId) {

     const modalTrigger = document.querySelectorAll(triggerSelector),
     modal = document.querySelector(modalSeceltor);
     



modalTrigger.forEach((elem) =>{
   elem.addEventListener('click',() => openModal(modalSeceltor,modalTimerId));
});


modal.addEventListener('click', (e) => {
   if(e.target && e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSeceltor);
   }
});

document.addEventListener('keydown', (e) => {
   if (e.code === 'Escape' && modal.classList.contains('show')) {
       closeModal(modalSeceltor);
   }
});

function showModalByScroll() {
   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
       openModal(modalSeceltor, modalTimerId);
   window.removeEventListener('scroll', showModalByScroll); 
   }
}

window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {closeModal, openModal };