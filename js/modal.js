const openModal = document.querySelector('.btn_ir_modal_mostrar');
const formularioModal = document.querySelector('.modal');
const closeModal = document.querySelector('.btn_salir_formulario');
const formulario = document.querySelector('form');
const modalExito = document.querySelector('#modalExito'); // Modal de éxito
const btnCerrarModalExito = document.querySelector('#btnCerrarModalExito'); // Botón para cerrar modal de éxito

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    formularioModal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    formularioModal.classList.remove('modal--show');
});

// Función para ocultar el modal original y mostrar el modal de éxito
formulario.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevenimos el envío inmediato del formulario

    // Aquí se puede agregar una validación o efecto de "carga" si es necesario.

    // Envía el formulario
    formulario.submit();

    // Cierra el modal original
    formularioModal.classList.remove('modal--show');

    // Muestra el modal de éxito
    modalExito.classList.add('modal--show');
});

// Cerrar el modal de éxito
btnCerrarModalExito.addEventListener('click', (e) => {
    e.preventDefault();
    modalExito.classList.remove('modal--show');
});



/*

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

*/