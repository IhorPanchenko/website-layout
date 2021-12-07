$(document).ready(function () {
  //play video on the main slider
  $(".hero-play").on("click", function (e) {
    $(".hero .dialog-window").addClass("dialog-active");
  });

  $(".dialog-close-button").on("click", function (e) {
    $(".dialog-window").removeClass("dialog-active");
  });

  $(".dialog-window").mouseup(function (e) {
    let dialogContent = $(".dialog-content");
    if (
      !dialogContent.is(e.target) &&
      dialogContent.has(e.target).length === 0
    ) {
      $(this).removeClass("dialog-active");
    }
  });

  $(".img-hover").on("click", function (e) {
    $(".blog-section .dialog-window").addClass("dialog-active");
  });

  $(".question-head").on("click", function (e) {
    $(".question-desc").toggleClass(".description-active");
    $(".question-head img").css("transform", "rotate(90deg)");
  });

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
});
