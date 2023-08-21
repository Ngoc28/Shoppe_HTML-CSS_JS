let register = document.querySelector('#register');
let login = document.querySelector('#login');
let closeIconCheck = document.querySelector('.close-icon-check');
let modalRegister = document.querySelector('.modal-register');
let modalLogin = document.querySelector('.modal-login');

let modal = document.querySelector('.modal');


register.addEventListener('click', function() {
    
    modalRegister.classList.add('open');
    
    
})

login.onclick = ()=> {
    modalLogin.classList.add('open')
}

modal.addEventListener('click', function() {
        
    modalRegister.classList.add('open');
})

closeIconCheck.onclick = function hideClickWithIcon() {
    modalRegister.classList.remove('open');
    modalLogin.classList.remove('open');
}