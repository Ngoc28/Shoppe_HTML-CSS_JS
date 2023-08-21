let register = document.querySelector('#register');
let login = document.querySelector('#login');
let closeIconCheck = document.querySelector('.close-icon-check');
let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal__overlay')
let authFormLogin = document.querySelector('.auth-form-login')
let authFormRegister = document.querySelector('.auth-form-register')


// register.addEventListener('click', ()=>{
//     modal.classList.add('open')
//     authFormLogin.classList.add('hide')
    
//     closeIconCheck.onclick = ()=> {
//         modal.classList.remove('open')
//     }
// })


// modal.addEventListener('click', ()=>{
//     modal.classList.remove('open')
// })

// authFormRegister.addEventListener('click', (event)=>{
//     event.stopPropagation()
// })

// login.addEventListener('click', () => {
//     modal.classList.add('open')
//     authFormRegister.classList.add('hide')

//     closeIconCheck.onclick = ()=> {
//         modal.classList.remove('open')
//     }
// })

// authFormLogin.addEventListener('click', (event)=>{
//     event.stopPropagation()
// })

register.addEventListener('click', ()=>{
    modal.classList.add('open')
    authFormLogin.classList.add('hide')
    authFormRegister.classList.remove('hide')
    
    closeIconCheck.onclick = ()=> {
        modal.classList.remove('open')
    }
})


modal.addEventListener('click', ()=>{
    modal.classList.remove('open')
    authFormLogin.classList.remove('hide')
    authFormRegister.classList.remove('hide')
})

authFormRegister.addEventListener('click', (event)=>{
    event.stopPropagation()
})

login.addEventListener('click', () => {
    modal.classList.add('open')
    authFormRegister.classList.add('hide')
    authFormLogin.classList.remove('hide')

    closeIconCheck.onclick = ()=> {
        modal.classList.remove('open')
    }
})

authFormLogin.addEventListener('click', (event)=>{
    event.stopPropagation()
})