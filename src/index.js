// CSS
import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import '../assets/scss/main.scss';


// Libs
import 'script-loader!jquery/dist/jquery';
import 'script-loader!gsap/src/uncompressed/TweenMax';
import 'script-loader!gsap/src/uncompressed/plugins/ScrollToPlugin';
import 'script-loader!slick-carousel/slick/slick';
import Splitting from "splitting";

// Scripts
import './scrollTo';

// Splitting

Splitting();

// Slick

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
