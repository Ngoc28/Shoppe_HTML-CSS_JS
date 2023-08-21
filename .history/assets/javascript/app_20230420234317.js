var register = document.querySelector('#register');
var login = document.querySelector('#login');

register.addEventListener('click', function() {
    let modalRegister = document.querySelector('.modal-register');
    var closeIcon = document.querySelector('.close-icon');
    console.log(closeIcon)
    
    modalRegister.classList.add('open');

    closeIcon.onclick = function hideClickWithIcon() {
        modalRegister.classList.remove('open');
    }
})