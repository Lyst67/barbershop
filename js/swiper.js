import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 500,
});
