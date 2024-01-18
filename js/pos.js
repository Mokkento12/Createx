document.addEventListener("DOMContentLoaded", () => {
  const subscribeBtn = document.getElementById("subscribeBtn");
  const subscribeOverlay = document.getElementById("subscribeOverlay");
  const subscribeForm = document.getElementById("subscribeForm");

  subscribeBtn.addEventListener("click", () => {
    subscribeOverlay.style.display = "flex";
  });

  subscribeOverlay.addEventListener("click", (event) => {
    if (event.target === subscribeOverlay) {
      subscribeOverlay.style.display = "none";
    }
  });

  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    subscribeOverlay.style.display = "none";
  });
});
