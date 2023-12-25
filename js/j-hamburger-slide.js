'use strict'

const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if(category_nav.classList.contains('open-menu')) {
    category_nav.classList.remove('open-menu')
  }
});

const category = document.querySelector('.category-menu');
const category_nav = document.querySelector('.category-nav');
category.addEventListener('click', () => {
  category_nav.classList.toggle('open-menu');
});
