document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".news-tab");
  const swiperContainer = document.querySelector(".swiper-container");
  const nums = document.querySelectorAll(".num");
  const prevBtn = document.querySelector(".num-btn__prev");
  const nextBtn = document.querySelector(".num-btn__next");

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

  nums.forEach(function (num) {
    num.addEventListener("click", function () {
      nums.forEach(function (el) {
        el.classList.remove("active");
      });
      num.classList.add("active");
    });
  });

  prevBtn.addEventListener("click", function () {
    const currentActive = document.querySelector(".num.active");
    if (
      currentActive.previousElementSibling &&
      currentActive.previousElementSibling.classList.contains("num")
    ) {
      currentActive.classList.remove("active");
      currentActive.previousElementSibling.classList.add("active");
    }
  });

  nextBtn.addEventListener("click", function () {
    const currentActive = document.querySelector(".num.active");
    if (
      currentActive.nextElementSibling &&
      currentActive.nextElementSibling.classList.contains("num")
    ) {
      currentActive.classList.remove("active");
      currentActive.nextElementSibling.classList.add("active");
    }
  });
});
