
const openModal = document.querySelector('.btn_ir_modal_mostrar');

const formularioModal = document.querySelector('.modal');

const closeModal = document.querySelector('.btn_salir_formulario');

openModal.addEventListener('click',(e)=>{

    e.preventDefault();

    formularioModal.classList.add('modal--show');

});

closeModal.addEventListener('click',(e)=>{

    e.preventDefault();

    formularioModal.classList.remove('modal--show');

});