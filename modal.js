const modalBtns = [...document.querySelectorAll('.about-btn'), document.querySelector('.mail-to-btn'), ...document.querySelectorAll('.slide-btn-submit')]
const modalWindow = document.querySelector('.modal')
const closeBtns = [...document.querySelectorAll('.modal-btn')]
modalBtns.map(btn=>{
    btn.addEventListener('click', ()=>{
        modalWindow.classList.toggle('active')
    })
})

closeBtns.map(btn=>{
    btn.addEventListener('click', ()=>{
        modalWindow.classList.remove('active')
    })
})