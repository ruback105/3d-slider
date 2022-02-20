document.addEventListener("DOMContentLoaded", function () {
  const showSlider = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      prevEl: ".showcase-navigation__prev",
      nextEl: ".showcase-navigation__next",
    },
  });

  console.log(showSlider);

  document.querySelector("video").playbackRate = 2;
});
