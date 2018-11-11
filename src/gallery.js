import { find } from "lodash";
const gallery = document.querySelector(".gallery");
const buttons = document.querySelectorAll(".gallery__switch");
const books = gallery.querySelectorAll(".gallery__book");

function cleanButtons() {
  buttons.forEach(button => button.classList.remove("active"));
}

function activeButton(el) {
  el.classList.add("active");
}

function cleanBooks() {
  books.forEach(book => book.classList.remove("active"));
}

function changeBook(number) {
  cleanBooks();

  let bookToShow = find(
    books,
    book => book.getAttribute("data-gallery") == number
  );

  bookToShow.classList.add("active");
}

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener("click", function(event) {
    event.preventDefault();
    let el = event.target;
    let galleryNumber = el.getAttribute("data-button-gallery");
    cleanButtons();
    activeButton(el);
    changeBook(galleryNumber);
  });
});
