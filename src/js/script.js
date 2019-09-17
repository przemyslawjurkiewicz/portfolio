let hero= document.querySelector ('.hero');
let heroHeight = hero.offsetHeight /2;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
   if (heroHeight < currentScrollPos) {
    document
      .querySelector ('.navigation')
      .classList.remove ('navigation--hidden');
  } else {
    document
      .querySelector ('.navigation')
      .classList.add ('navigation--hidden');
  }
};
