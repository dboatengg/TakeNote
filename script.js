const instructionsBtn = document.querySelector(".instructions-btn"),
  instructionsClose = document.querySelector("#instructions-close"),
  instructionsBox = document.querySelector(".instructions-box"),
  noteAdd = document.querySelector(".note-add"),
  form = document.querySelector(".form"),
  formClose = document.querySelector("#form-close"),
  formBtn = document.querySelector(".form__btn"),
  textarea = document.querySelector("textarea"),
  characterCount = document.querySelector(".character-count"),
  titleCount = document.querySelector(".title-count"),
  noteTitle = document.querySelector("#note-title");

// instruction box
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
});

// count characters in note description and note title
textarea.addEventListener("keyup", (e) => {
  if (e.target.value.length > 240) {
    characterCount.innerHTML = "Description should not exceed 240 characters";
    characterCount.classList.add("show");
  } else {
    characterCount.innerHTML = "";
    characterCount.classList.remove("show");
  }
});

noteTitle.onkeyup = (e) => {
  if (e.target.value.length > 40) {
    titleCount.innerHTML = "You can only save up to 40 characters";
    titleCount.classList.add("show");
  } else {
    titleCount.innerHTML = "";
    titleCount.classList.remove("show");
  }
};

// prevent multiple spaces in note description area
processKeyUp = function (event) {
  if (window.event) {
    event = window.event;
  }
  if (event.keyCode == 32) {
    var val = textarea;
    val.value = val.value.replace(/ +(?= )/g, "");
  }
};
textarea.onkeyup = processKeyUp;
