let register = document.querySelector('#register');
let login = document.querySelector('#login');

register.addEventListener('click', function() {
    let modalRegister = document.querySelector('.modal-register');
    let closeIconCheck = document.querySelector('.close-icon-check');
    console.log(closeIconCheck)
    
    modalRegister.classList.add('open');

    closeIconCheck.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }

    modalRegister.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }
})