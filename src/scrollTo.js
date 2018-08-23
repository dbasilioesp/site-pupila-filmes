import { TweenMax } from 'gsap';

// Scroll To

const $menuLinks = document.querySelectorAll('[scrollTo]');

function scrollToSection(event) {
  event.preventDefault();
  const href = this.getAttribute('href');

  TweenMax.to(window, 1, { scrollTo: href, ease: Power2.easeInOut });
}

$menuLinks.forEach(function ($link) {
  $link.addEventListener('click', scrollToSection);
})
