let register = document.querySelector('#register');
let login = document.querySelector('#login');
let closeIconCheck = document.querySelector('.close-icon-check');
let modal = document.querySelector('.modal');

let authFormLogin = document.querySelector('.auth-form-login')
let authFormRegister = document.querySelector('.auth-form-register')


register.addEventListener('click', ()=>{
    modal.classList.add('open')
})