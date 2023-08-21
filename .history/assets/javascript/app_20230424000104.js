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

// slider
let sliderIndex = 1;
showSliders(sliderIndex);

let plusSlider = (n)=> {
    showSliders(sliderIndex += n)
}
console.log(document.getElementsByClassName('slider'))

function showSliders(n) {
    let slider = document.querySelectorAll('.slider')
    if(n > slider.length) {
        sliderIndex = 1
    }
    if(n < 1) {
        sliderIndex = slider.length
    }
    for(let i = 0; i = x.length; i++) {
        slider[i].style.display = 'none';
    }
    x[sliderIndex - 1].style.display = 'block'
}