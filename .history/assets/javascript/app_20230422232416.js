let register = document.querySelector('#register');
let login = document.querySelector('#login');
let closeIconCheck = document.querySelector('.close-icon-check');
let closeIconLog = document.querySelector('.close-icon-log');
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
    
   
})


modal.addEventListener('click', ()=>{
    modal.classList.remove('open')
    authFormLogin.classList.remove('hide')
    authFormRegister.classList.remove('hide')
})

authFormRegister.addEventListener('click', (event)=>{
    event.stopPropagation()
    closeIconCheck.onclick = ()=> {
        modal.classList.remove('open')
    }
})

login.addEventListener('click', () => {
    modal.classList.add('open')
    authFormRegister.classList.add('hide')
    authFormLogin.classList.remove('hide')
})

authFormLogin.addEventListener('click', (event)=>{
    event.stopPropagation()
    closeIconLog.addEventListener('click',()=> {
        modal.classList.remove('open')
    })
})