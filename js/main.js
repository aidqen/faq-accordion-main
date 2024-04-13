'use strict'

function onInit() {
  const elBtn = document.querySelectorAll('.btn')
  const elAccContent = document.querySelector('.accordion-content')

  elBtn.forEach( btn => btn.addEventListener('click', () => {
    btn.classList.toggle('active')
    if (btn.classList.contains('active')) {
        btn.src = '/assets/images/icon-minus.svg'
    } else btn.src = '/assets/images/icon-plus.svg'
    console.log(btn.nextElementSibling);
  }))
}
