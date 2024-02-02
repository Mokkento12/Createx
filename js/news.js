document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".news-tab");
  const swiperContainer = document.querySelector(".swiper-container");

  const mySwiper = new Swiper(swiperContainer, {
    loop: true,
    navigation: {
      nextEl: ".num-btn__next",
      prevEl: ".num-btn__prev",
    },
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      mySwiper.slideTo(index);
    });
  });
});
