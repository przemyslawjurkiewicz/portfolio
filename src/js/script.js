import { Carts, Groups } from '../vendor/data';
import WOW from 'wow.js';

// Wow.js init
new WOW({
  mobile: false,
  live: true,
  resetAnimation: true
}).init();

// Reload on resize
window.addEventListener('resize', () => {
  location.reload();
});

// Navigation bar change when scroll
let hero = document.querySelector('.hero');
let heroHeight = hero.offsetHeight / 4;

// If mobile olways on
if (
  typeof window.orientation !== 'undefined' ||
  navigator.userAgent.indexOf('IEMobile') !== -1
) {
  document.querySelector('.navigation').classList.remove('navigation--hidden');
}
// If not mobile change when sroll
else {
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (heroHeight < currentScrollPos) {
      document.querySelector('.navigation').classList.remove('navigation--hidden');
      document
        .querySelector('.navigation__logo')
        .classList.remove('navigation__logo--hidden');
    } else {
      document.querySelector('.navigation').classList.add('navigation--hidden');
      document
        .querySelector('.navigation__logo')
        .classList.add('navigation__logo--hidden');
    }
  };
}

// Navigation item active when sroll on section
const links = document.querySelectorAll('.navigation__item');
const sections = document.querySelectorAll('section');
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 200 < sections[index].offsetTop) {}
  links.forEach(link => link.classList.remove('navigation__item--active'));
  links[index].classList.add('navigation__item--active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// Mustache.js
Groups.map(group =>
  generateTemplate('portfolio-section-template', group, 'portfolio-wrapper')
);

Groups.map(group =>
  generateTemplate('portfolio-menu-template', group, 'portfolio-menu')
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

// Portfolio menu swicher
const menuButtons = [...document.getElementsByClassName('portfolio__button')];
const portfolioSections = [...document.getElementsByClassName('section')];

const portfolioToggle = id => {
  portfolioSections.map(section =>
    section.id === id
      ? section.classList.add('section--active')
      : section.classList.remove('section--active')
  );
  menuButtons.map(button =>
    button.id === id
      ? button.classList.add('button--active')
      : button.classList.remove('button--active')
  );
};

menuButtons.map(button =>
  button.addEventListener('click', () => portfolioToggle(button.id))
);

// First section and first button visible on load.
portfolioSections[0].classList.add('section--active');
menuButtons[0].classList.add('button--active');

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
