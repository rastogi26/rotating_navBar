const open= document.getElementById('open')
const close= document.getElementById('close')
const container= document.querySelector('.container')

//to open the nav bar by changing the id of class
open.addEventListener('click', () => container.classList.add('show-nav'))
//similary to close
close.addEventListener('click',() => container.classList.remove('show-nav'))
