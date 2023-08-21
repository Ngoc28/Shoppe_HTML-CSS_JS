var register = document.querySelector('#register');
var login = document.querySelector('#login');

register.addEventListener('click', function() {
    let authformRegister = document.querySelector('.auth-form-register');
    register = authformRegister.classList.add('open')
})