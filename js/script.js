document.addEventListener("DOMContentLoaded", function () {
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

  const toggleButton1 = document.getElementById("toggleButton-1");
  const offerDescText1 = document.querySelector(".offer-desc-text-1");

  toggleButton1.addEventListener("click", function () {
    offerDescText1.classList.toggle("hidden");
    toggleButton1.innerHTML = offerDescText1.classList.contains("hidden")
      ? '<img src="img/plus.svg" alt="" class="toggle-button-img">'
      : '<img src="img/minus.svg" alt="" class="toggle-button-img">';
  });

  const toggleButton2 = document.getElementById("toggleButton-2");
  const offerDescText2 = document.querySelector(".offer-desc-text-2");

  toggleButton2.addEventListener("click", function () {
    offerDescText2.classList.toggle("hidden");
    toggleButton2.innerHTML = offerDescText2.classList.contains("hidden")
      ? '<img src="img/plus.svg" alt="" class="toggle-button-img">'
      : '<img src="img/minus.svg" alt="" class="toggle-button-img">';
  });
});
