import css from "./sass/main.scss";
const introduction = document.querySelector(".introduction");
const header = document.querySelector(".header");
const headerTitle = document.querySelector(".header__title");

window.addEventListener("scroll", () => {
  let introductionPosition = introduction.getBoundingClientRect().top;
  if (introductionPosition != 0) {
    header.classList.add("header--inverted");
    headerTitle.classList.add("header__title--inverted");
    headerButton.classList.add("header__button--inverted");
  } else {
    header.classList.remove("header--inverted");
    headerTitle.classList.remove("header__title--inverted");
    headerButton.classList.remove("header__button--inverted");
  }
});