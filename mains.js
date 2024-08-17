const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__content h4", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btns", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".product__card img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(" .section__header", {
    ...scrollRevealOption,
    origin: "right ",
});
ScrollReveal().reveal(".section__container arrival__container", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".arrival__grid", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".arrival__card btn", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".client__image img", {
    ...scrollRevealOption,
    origin: "right",
});

const swiper = new Swiper(".swiper", {
    loop: true,
});