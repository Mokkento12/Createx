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
        let activeIndex = swiper.realIndex;
        setActiveTab(activeIndex);
      },
    },
  });

  function setActiveTab(index) {
    let dates = document.querySelectorAll(".date");
    dates.forEach(function (date, i) {
      date.classList.toggle("active", i === index);
    });
  }
});
