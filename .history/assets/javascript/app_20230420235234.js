let register = document.querySelector('#register');
let login = document.querySelector('#login');

register.addEventListener('click', function() {
    let modalRegister = document.querySelector('.modal-register');
    let closeIconCheck = document.querySelector('.close-icon-check');
    let authFormSwitchLogin = document.querySelector('.auth-form__switch-btn')
    console.log(authFormSwitchLogin)
    
    modalRegister.classList.add('open');

    closeIconCheck.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }

    modalRegister.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }


})