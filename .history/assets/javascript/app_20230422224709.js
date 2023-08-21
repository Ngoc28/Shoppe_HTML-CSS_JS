let register = document.querySelector('#register');
let login = document.querySelector('#login');
let closeIconCheck = document.querySelector('.close-icon-check');
let modalRegister = document.querySelector('.modal-register');
let modalLogin = document.querySelector('.modal-login');



register.addEventListener('click', ()=>{
    register.classList.add('modal__overlay', 'modal__body', 'modal__body')
})