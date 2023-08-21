let register = document.querySelector('#register');
let login = document.querySelector('#login');
let closeIconCheck = document.querySelector('.close-icon-check');
let modalRegister = document.querySelector('.modal-register');
let modalLogin = document.querySelector('.modal-login');



register.addEventListener('click', function() {   
    modalRegister.classList.add('open');
    modalRegister.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }
})

login.onclick = ()=> {
    modalLogin.classList.add('open');
    modalLogin.onclick = function hideClickWithIcon() {
        modalLogin.classList.remove('open');
    }
}

modal.addEventListener('click', function() {       
    modalRegister.classList.remove('open');
    modalLogin.classList.remove('open');

})

closeIconCheck.onclick = function hideClickWithIcon() {
    modalRegister.classList.remove('open');
    modalLogin.classList.remove('open');
}