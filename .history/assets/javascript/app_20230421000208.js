let register = document.querySelector('#register');
let login = document.querySelector('#login');

register.addEventListener('click', function() {
    let modal = document.querySelector('modal')
    let modalRegister = document.querySelector('.modal-register');
    let modalLogin = document.querySelector('.modal-login')
    let closeIconCheck = document.querySelector('.close-icon-check');
    let authFormSwitchLogin = document.querySelector('.auth-form__switch-btn')//link chuyen huong sang form login
    
    authFormSwitchLogin.addEventListener('click', ()=> {
        modalLogin.classList.add('open')
    })
    
    modal.classList.add('open');

    closeIconCheck.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }

    modal.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }


})