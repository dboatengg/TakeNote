const instructionsBtn = document.querySelector(".instructions-btn"),
  instructionsClose = document.querySelector("#instructions-close"),
  instructionsBox = document.querySelector(".instructions-box"),
  noteAdd = document.querySelector(".note-add"),
  form = document.querySelector(".form"),
  formClose = document.querySelector("#form-close"),
  formBtn = document.querySelector(".form__btn");

// instruction
instructionsBtn.addEventListener("click", () => {
  instructionsBox.classList.add("show");
});
instructionsClose.addEventListener("click", () => {
  instructionsBox.classList.remove("show");
});

// form
noteAdd.addEventListener("click", () => {
  form.classList.add("show");
});
formClose.addEventListener("click", () => {
  form.classList.remove("show");
});
formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("hi");
});
