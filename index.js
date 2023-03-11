const modal = document.querySelector(".modal");
const container = document.querySelector(".container");
const heroButton = document.querySelectorAll(".heroButton");
const close = document.querySelector(".modal__content--close");

heroButton.forEach((button) => {
  button.addEventListener("click", () => {
    openModal();
    console.log(button.getAttribute("id"));
  });
});

close.addEventListener("click", closeModal);

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
  container.classList.add("blurred");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("visible");
  container.classList.remove("blurred");
}
