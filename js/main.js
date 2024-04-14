'use strict'

var elAccordion 

function onInit() {
  elAccordion = document.querySelectorAll('.content-box')
  // for (var i = 0 ; i < elAccordion.length ; i++) {
  //   elAccordion[i].addEventListener('click', () => {
  //     this.classList.toggle('active')
  //   })
  // }
  elAccordion.forEach(element => {
    element.addEventListener('click', () => {
      element.classList.toggle('active')
    })
  })
}