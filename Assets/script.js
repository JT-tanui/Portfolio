const navBar = document.querySelector('.nav-bar');
const menuIcon = document.querySelector('.nav-bar i.fas.fa-bars');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('show-menu');
});
