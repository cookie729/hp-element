'use strict';

// {
//   // Hamburger-menu --------------
//   const open = document.getElementById('open');
//   const overlay = document.querySelector('.overlay');
//   const close = document.getElementById('close');
//   open.addEventListener('click', () => {
//     overlay.classList.add('show');
//     open.classList.add('hide');
//   });
//   close.addEventListener('click', () => {
//     overlay.classList.remove('show');
//     open.classList.remove('hide');
//   });
//   overlay.addEventListener('click', () => {
//     overlay.classList.remove('show');
//     open.classList.remove('hide');
//   });
// }

// Jquery;
$(document).ready(function () {
  $('#j-open').click(function () {
    $('.j-overlay').fadeIn();
  });

  $('#j-close').click(function () {
    $('.j-overlay').fadeOut();
  });
});
