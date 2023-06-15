"use strict";

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
const menuBtn = document.querySelector(".menu-wrapper");
const rightSectionNav = document.querySelector(".right-section-nav");
const closeBtn = document.querySelector(".close-icon");
const docBody = document.querySelector("body");
const slideShowContainer = document.querySelector(".slideshow-container");

const showMobileNav = function () {
  rightSectionNav.classList.add("mobile-nav");
  docBody.classList.add("hideBody");
  slideShowContainer.style.zIndex = "-1";
};

const hideNav = function () {
  rightSectionNav.classList.remove("mobile-nav");
  docBody.classList.remove("hideBody");
  slideShowContainer.style.zIndex = "1";
};

menuBtn.addEventListener("click", showMobileNav);
closeBtn.addEventListener("click", hideNav);

document.querySelector(".nav__links").addEventListener("click", function (e) {
  ///Matching strategy
  if (
    e.target.classList.contains("nav__link") &&
    e.target.getAttribute("href") !== "#"
  ) {
    e.preventDefault();
    const id = e.target.getAttribute("href");

    const getId = document.querySelector(id);

    getId.scrollIntoView({ behavior: "smooth" });
    if (rightSectionNav.classList.contains("mobile-nav")) hideNav();
    return;
  }
});
