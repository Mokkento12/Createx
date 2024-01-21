const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("[data-close]");

modalTrigger.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(modal);
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

const modalTriggerCv = document.querySelectorAll("[data-cv]");
const modalCv = document.querySelector(".modal__cv");
const modalCloseBtnCv = document.querySelector(".modal__cv [data-close]");

modalTriggerCv.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(modalCv);
  });
});

function closeModalCv() {
  modalCv.style.display = "none";
  document.body.style.overflow = "";
}

modalCloseBtnCv.addEventListener("click", closeModalCv);

modalCv.addEventListener("click", (e) => {
  if (e.target === modalCv) {
    closeModalCv();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modalCv.style.display === "block") {
    closeModalCv();
  }
});

function openModal(selectedModal) {
  selectedModal.style.display = "block";
  document.body.style.overflow = "hidden";
}
