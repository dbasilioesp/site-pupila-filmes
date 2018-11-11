import { TweenMax } from "gsap";
import "gsap/ScrollToPlugin";

// Scroll To

const menuLinks = document.querySelectorAll("[scrollTo]");

function scrollToSection(event) {
  event.preventDefault();
  const href = event.target.getAttribute("href");

  TweenMax.to(window, 1, {
    scrollTo: { y: href, offsetY: 50 },
    ease: Power2.easeInOut
  });
}

menuLinks.forEach(function($link) {
  $link.addEventListener("click", scrollToSection);
});
