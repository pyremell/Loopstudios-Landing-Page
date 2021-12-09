const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {

  if (header.classList.contains('open')) {
    body.classList.remove('noscroll'); // Prevents scrolling while mobile menu is open
    header.classList.remove('open'); // Close hamburger menu
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
  else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
})