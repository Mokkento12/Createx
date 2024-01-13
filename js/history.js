// const historySwiper = new Swiper(".history-swiper", {
//   // Optional parameters
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: ".history-button-next",
//     prevEl: ".history-button-prev",
//   },
// });
document.addEventListener("DOMContentLoaded", () => {
  const historySwiper = new Swiper(".history-swiper", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".history-button-next",
      prevEl: ".history-button-prev",
    },
    on: {
      slideChange: function (swiper) {
        var activeIndex = swiper.realIndex; // Поправлено на swiper.realIndex
        setActiveTab(activeIndex);
      },
    },
  });

  function setActiveTab(index) {
    var dates = document.querySelectorAll(".date");
    dates.forEach(function (date, i) {
      date.classList.toggle("active", i === index);
    });
  }
});
