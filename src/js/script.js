import { Carts, Groups } from '../vendor/dane';
import WOW from 'wow.js';

// Wow.js init
new WOW({
  mobile: false,
  live: true,
  resetAnimation: true
}).init();

// Navigation bar change when scroll
let hero = document.querySelector('.hero');
let heroHeight = hero.offsetHeight / 2;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (heroHeight < currentScrollPos) {
    document.querySelector('.navigation').classList.remove('navigation--hidden');
  } else {
    document.querySelector('.navigation').classList.add('navigation--hidden');
  }
};

// Navigation item active when sroll on section
const links = document.querySelectorAll('.navigation__item');
const sections = document.querySelectorAll('section');
console.log(sections);
function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach(link => link.classList.remove('navigation__item--active'));
  links[index].classList.add('navigation__item--active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// Mustache.js
Groups.map(group =>
  generateTemplate('portfolio-section-template', group, 'portfolio-wrapper')
);

Carts.map(cart =>
  cart.id === 'other'
    ? generateTemplate('portfolio-gallery-template', cart, cart.id)
    : generateTemplate('portfolio-cart-template', cart, cart.id)
);

// Generate html from temple (mustache js)
function generateTemplate(name, data, basicElement) {
  var template = document.getElementById(name).innerHTML;
  var element = document.getElementById(basicElement);
  Mustache.parse(template);
  element.innerHTML += Mustache.render(template, data);
}

// Gallery slider
const showSlides = n => {
  let slides = document.getElementsByClassName('gallery__slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
};

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
prev.addEventListener('click', () => showSlides((slideIndex -= 1)));
next.addEventListener('click', () => showSlides((slideIndex += 1)));
