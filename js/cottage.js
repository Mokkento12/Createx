const cottageSwiper = new Swiper(".cottage-swiper", {
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  on: {
    slideChange: function () {
      updateActiveTab(this.realIndex);
    },
  },
});

function changeSlide(index) {
  cottageSwiper.slideTo(index);
  updateActiveTab(index);
}

function updateActiveTab(activeIndex) {
  const tabs = document.querySelectorAll(".cottage-tabs .cottage-tab");
  tabs.forEach((tab, index) => {
    tab.classList.toggle("active", index === activeIndex);
  });
}

updateActiveTab(cottageSwiper.realIndex);

const portfolioSwiper = new Swiper(".swiper-portfolio", {
  loop: true,
  navigation: {
    nextEl: ".portfolio-button-next",
    prevEl: ".portfolio-button-prev",
  },
});
