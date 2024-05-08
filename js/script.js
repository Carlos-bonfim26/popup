let btn = document.getElementById('btnClick');
let popup = document.getElementById('popup');
let ok = document.getElementById('ok')
btn.addEventListener('click', () =>{
    popup.style.visibility = 'visible'
    popup.style.top = '50%'
    popup.style.transform = 'translate(-50%, -50%) scale(1)'
})
ok.addEventListener('click', () =>{
    popup.style.visibility = 'hidden'
    popup.style.top = '0'
    popup.style.transform = 'translate(-50%, -50%) scale(0.1)'
})