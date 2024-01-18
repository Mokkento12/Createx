const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("[data-close]");

modalTrigger.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
