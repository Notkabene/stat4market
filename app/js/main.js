const headingAbout = document.querySelector('.about__title')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const screenWidth = window.screen.width

if (screenWidth < 769) {
  headingAbout.innerHTML = 'Как работает модуль Аналитика по API для Wildberries?'
}
console.log(burger);
burger.addEventListener('click', () => {
  console.log('burger');
  burger.classList.toggle('active')
  menu.classList.toggle('active')
  document.body.classList.toggle('lock')
})




