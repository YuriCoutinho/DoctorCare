import css from "./sass/main.scss";
const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerTitle = document.querySelector(".header__title");
const headerButton = document.querySelector(".header__button");
const headerMenuIcon = document.querySelector(".header-icon");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-nav__item");

const whatsappButtons = document.querySelectorAll(".btn");

const toggleMenu = () => {
  header.classList.toggle("header--inverted");
  headerTitle.classList.toggle("header__title--inverted");
  headerButton.classList.toggle("header__button--inverted");
  menu.classList.toggle("menu--active");
  headerMenuIcon.classList.toggle("header-icon--active");

  if (body.style.overflow == "hidden") {
    body.style.overflow = "scroll";
  } else {
    body.style.overflow = "hidden";
  }
};

headerButton.addEventListener("click", () => {
  toggleMenu();
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    toggleMenu();
  });
});

whatsappButtons.forEach((e) => {
  e.addEventListener("click", () => {
    const wppText = "Hi! Glad you're here! The DoctorCare uses a fake number! If you want, clone the project and use a real number to test!"
    window.location.href = `https://api.whatsapp.com/send/?phone=5521XXXXXXXXX&text=${wppText}`;
  });
});
