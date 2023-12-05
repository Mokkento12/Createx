const mainSwiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

mainSwiper.on("slideChange", () => {
  const activeSlideIndex = mainSwiper.realIndex;
  const tabs = document.querySelectorAll(".tabs .tab");

  tabs.forEach((tab, index) => {
    if (index === activeSlideIndex) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
});

const portfolioSwiper = new Swiper(".swiper-portfolio", {
  loop: true,
  navigation: {
    nextEl: ".portfolio-button-next",
    prevEl: ".portfolio-button-prev",
  },
});

const testimonialsSwiper = new Swiper(".testimonials-slider", {
  loop: true,
  navigation: {
    nextEl: ".testimonials-button-next",
    prevEl: ".testimonials-button-prev",
  },
});
