var register = document.querySelector('#register');
var login = document.querySelector('#login');

register.addEventListener('click', function() {
    let modalRegister = document.querySelector('.modal-register');
    var closeIconCheck = document.querySelector('.close-icon-check');
    console.log(closeIconCheck)
    
    modalRegister.classList.add('open');

    closeIconCheck.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }
})