const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function() {

  if (header.classList.contains('open')) {
    header.classList.remove('open');
  }
  else {
    header.classList.add('open');
  }
})