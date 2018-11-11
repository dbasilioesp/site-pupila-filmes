import "basiclightbox/dist/basicLightbox.min.css";
import * as basicLightbox from "basiclightbox";

let thumbs = document.querySelectorAll(".gallery .gallery__thumb");

function showImage(el) {
  let src = el.getAttribute("src");
  let img = `<img  src="${src}">`;
  basicLightbox.create(img).show();
}

function showYoutube(el) {
  let url = el.getAttribute("data-youtube");

  let iframe = `<iframe
      src="https://www.youtube.com/embed/Scxs7L0vhZ4"
      frameborder="0"
      allowfullscreen
    />`;

  basicLightbox.create(iframe).show();
}

thumbs.forEach(function(thumb) {
  thumb.addEventListener("click", event => {
    let el = event.target;
    let isImage = el.classList.contains("is-image");
    let isYoutube = el.classList.contains("is-youtube");
    let img = el.querySelector("img");

    if (isImage) {
      showImage(img);
    } else if (isYoutube) {
      showYoutube(img);
    } else {
      showImage(img);
    }
  });
});
