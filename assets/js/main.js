const player = document.querySelector(".hero-play");
const dialog = document.querySelector(".dialog-window");
const dialogWindow = document.querySelector(".hero .dialog-window");
const dialogClose = document.querySelector(".dialog-close-button");
const iframe = document.querySelector("iframe");

const questionTitles = document.querySelectorAll(".question-head");

player.addEventListener("click", function () {
  dialogWindow.classList.add("dialog-active");
});

dialogClose.addEventListener("click", function () {
  dialogWindow.classList.remove("dialog-active");
  iframe.setAttribute("src", iframe.getAttribute("src"));
});

dialog.addEventListener("mouseup", function (event) {
  if (event.target === this) {
    this.classList.remove("dialog-active");
  }
});

for (let questionTitle of questionTitles) {
  questionTitle.addEventListener("click", function () {
    this.closest(".question").classList.toggle("q-active");
  });
}

let heroSwiper = new Swiper("#hero-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: "#hero-swiper-pagination",
    clickable: true,
  },
});

let blogSwiper = new Swiper("#blog-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: "#blog-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let testimonialsSwiper = new Swiper("#testimonials-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: "#testimonials-swiper-pagination",
    clickable: true,
  },
});
