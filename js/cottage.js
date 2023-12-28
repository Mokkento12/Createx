const cottageSwiper = new Swiper(".cottage-swiper", {
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

const tabButtons = document.querySelectorAll(".cottage-tab");

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    cottageSwiper.slideTo(index);
    updateActiveTab(index);
  });
});

function updateActiveTab(activeIndex) {
  tabButtons.forEach((button, index) => {
    button.classList.toggle("active", index === activeIndex);
  });
}
