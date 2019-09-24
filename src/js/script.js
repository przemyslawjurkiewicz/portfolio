// Header navigation hidden//
// Portfolio Section Mustache.js //
import { Carts, Groups } from '../vendor/dane';

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

Groups.map(group =>
  generateTemplate('portfolio-section-template', group, 'portfolio-wrapper')
);

Carts.map(cart => generateTemplate('portfolio-cart-template', cart, cart.id));

// Generate html from temple (mustache js)
function generateTemplate(name, data, basicElement) {
  var template = document.getElementById(name).innerHTML;
  var element = document.getElementById(basicElement);
  Mustache.parse(template);
  element.innerHTML += Mustache.render(template, data);
}

// let images = []
// import * as images from '../images/min';
// console.log(images[0]);
