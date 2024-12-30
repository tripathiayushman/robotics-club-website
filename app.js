const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
//this is a test
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});