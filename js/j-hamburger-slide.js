
'use strict'

// const category = document.querySelector('.category-menu');
// const nav = document.querySelector('.category-nav');
// category.addEventListener('click', () => {
//   nav.classList.toggle('open-menu');
// });

const btn = document.querySelector('.btn-menu');
const mobile_nav = document.querySelector('.main-nav');
btn.addEventListener('click', () => {
  mobile_nav.classList.toggle('open-menu');
});

const mobile_category = document.querySelector('.category-menu');
const mobile_category_nav = document.querySelector('.category-nav');
mobile_category.addEventListener('click', () => {
  mobile_category_nav.classList.toggle('open-menu');
});
