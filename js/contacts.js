document.addEventListener("DOMContentLoaded", function () {
  const selectWrapper = document.querySelector(".select-wrapper");
  const selectInput = document.querySelector(".select-input");

  // Добавляем обработчик клика по стрелке
  selectWrapper.addEventListener("click", function (event) {
    // Проверяем, что был клик именно по стрелке
    if (event.target.classList.contains("arrow")) {
      // Симулируем клик по инпуту, чтобы открыть выпадающий список
      selectInput.click();
    }
  });
});
