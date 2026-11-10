const popup = document.querySelector("#popup");
const openButton = document.querySelector("#openPopupBtn");
const closeButton = document.querySelector("#closePopupBtn");

function openPopup() {
  popup.classList.add("is-open");
  popup.setAttribute("aria-hidden", "false");
}

function closePopup() {
  popup.classList.remove("is-open");
  popup.setAttribute("aria-hidden", "true");
}

openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

// Close popup when clicking on the dark backdrop outside the panel
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

// Close popup when pressing the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popup.classList.contains("is-open")) {
    closePopup();
  }
});