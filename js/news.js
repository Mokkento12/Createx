document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".news-tab");
  const swiperContainer = document.querySelector(".swiper-container");
  const nums = document.querySelectorAll(".num");
  const slides = document.querySelectorAll(".slide");
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

      if (index === 0) {
        prevBtn.classList.add("hidden");
      } else {
        prevBtn.classList.remove("hidden");
      }

      if (index === 3) {
        nextBtn.classList.add("hidden");
      } else {
        nextBtn.classList.remove("hidden");
      }
    });
  });

  function moveTo(num) {
    nums.forEach(function (el) {
      el.classList.remove("active");
    });
    num.classList.add("active");

    const index = +num.dataset.index;
    mySwiper.slideTo(index);

    if (index === 0) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    if (index === 3) {
      nextBtn.classList.add("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
  }

  nums.forEach(function (num) {
    num.addEventListener("click", function () {
      moveTo(num);
    });
  });

  prevBtn.addEventListener("click", function () {
    const currentActive = document.querySelector(".num.active");
    if (
      currentActive.previousElementSibling &&
      currentActive.previousElementSibling.classList.contains("num")
    ) {
      moveTo(currentActive.previousElementSibling);
    }
  });

  nextBtn.addEventListener("click", function () {
    const currentActive = document.querySelector(".num.active");
    if (
      currentActive.nextElementSibling &&
      currentActive.nextElementSibling.classList.contains("num")
    ) {
      moveTo(currentActive.nextElementSibling);
    } else {
      moveTo(nums[0]);
    }
  });
});
