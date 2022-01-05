$(document).ready(function () {
  $(".news__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".partners__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".clients__slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".main__slider").slick({
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: "linear",
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button">Назад /</button>',
    nextArrow:
      '<button class="slick-next" aria-label="Next" type="button">Вперед</button>',
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});
