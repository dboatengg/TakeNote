const instructionsBtn = document.querySelector(".instructions-btn"),
  instructionsClose = document.querySelector("#instructions-close"),
  instructionsBox = document.querySelector(".instructions-box"),
  noteAdd = document.querySelector(".note-add"),
  form = document.querySelector(".form"),
  formClose = document.querySelector("#form-close"),
  formBtn = document.querySelector(".form__btn"),
  textarea = document.querySelector("textarea"),
  notes = document.querySelector(".notes"),
  characterCount = document.querySelector(".character-count"),
  titleCount = document.querySelector(".title-count"),
  dropdown = document.querySelector("#dropdown-wrapper"),
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

// count characters in note description
textarea.addEventListener("keyup", (e) => {
  if (e.target.value.length > 240) {
    characterCount.innerHTML = "Description should not exceed 240 characters";
    characterCount.classList.add("show");
  } else {
    characterCount.innerHTML = "";
    characterCount.classList.remove("show");
  }
});

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

//count characters in note title
noteTitle.onkeyup = (e) => {
  if (e.target.value.length > 35) {
    titleCount.innerHTML = "Title should note exceed 35 characters";
    titleCount.classList.add("show");
  } else {
    titleCount.innerHTML = "";
    titleCount.classList.remove("show");
  }
};

// Add note
formBtn.onclick = () => {
  if (noteTitle.value.length < 1 && textarea.value.length < 1) {
    titleCount.innerHTML = "Kindly enter a note title";
    titleCount.classList.add("show");
    characterCount.innerHTML = "Kindly enter a note description";
    characterCount.classList.add("show");
  } else if (noteTitle.value.length < 1) {
    titleCount.innerHTML = "Kindly enter a note title";
    titleCount.classList.add("show");
  } else if (textarea.value.length < 1) {
    characterCount.innerHTML = "Kindly enter a note description";
    characterCount.classList.add("show");
  } else if (noteTitle.value.length > 35 && textarea.value.length > 240) {
    titleCount.innerHTML = "Title should note exceed 35 characters";
    titleCount.classList.add("show");
    characterCount.innerHTML = "Description should not exceed 240 characters";
    characterCount.classList.add("show");
  } else if (noteTitle.value.length > 35) {
    titleCount.innerHTML = "Title should note exceed 35 characters";
    titleCount.classList.add("show");
  } else if (textarea.value.length > 240) {
    characterCount.innerHTML = "Description should not exceed 240 characters";
    characterCount.classList.add("show");
  } else {
    // create new elements
    let note = document.createElement("li"),
      noteBox = document.createElement("div"),
      noteBoxTitle = document.createElement("h2"),
      noteText = document.createElement("p"),
      noteTextIcons = document.createElement("div"),
      noteView = document.createElement("i"),
      noteEdit = document.createElement("i"),
      noteDelete = document.createElement("i");

    //fill in title and description input areas
    noteBoxTitle.innerHTML = noteTitle.value;
    noteText.innerHTML = textarea.value;

    // localStorage.setItem("title", noteBoxTitle);
    // noteBoxTitle = localStorage.getItem("title");
    // localStorage.setItem("title", noteBoxTitle);
    // noteBoxTitle = localStorage.getItem("title");

    // add classes to new elements
    note.className = "note note-single";
    noteBox.className = "note-box note-text";
    noteTextIcons.className = "note-text__icon";
    noteView.className = "uil uil-eye";
    noteView.title = "view note";
    noteEdit.className = "uil uil-edit";
    noteEdit.title = "edit note";
    noteDelete.className = "uil uil-trash";
    noteDelete.title = "delete note";

    //structure
    noteTextIcons.appendChild(noteView);
    noteTextIcons.appendChild(noteEdit);
    noteTextIcons.appendChild(noteDelete);
    noteBox.appendChild(noteBoxTitle);
    noteBox.appendChild(noteText);
    note.appendChild(noteBox);
    note.appendChild(noteTextIcons);

    //background
    if (dropdown) {
      if (dropdown.options[dropdown.selectedIndex].text == "Red") {
        note.style.backgroundColor = "#ffb3a7";
      }
      if (dropdown.options[dropdown.selectedIndex].text == "Yellow") {
        note.style.backgroundColor = "#ece3a1";
      }
      if (dropdown.options[dropdown.selectedIndex].text == "Green") {
        note.style.backgroundColor = "#BCF5A6";
      }
      // note.style.backgroundColor =
      //   dropdown.options[dropdown.selectedIndex].text;
    } else {
      note.style.backgroundColor = "#d9d9d9";
    }

    const noteas = JSON.parse(localStorage.getItem("noteas") || "[]");
    localStorage.setItem("noteas", JSON.stringify(noteas));

    //add to page
    notes.appendChild(note);

    //empty all form fields
    noteTitle.value = "";
    textarea.value = "";
    dropdown.value = "";

    //remove form
    form.classList.remove("show");
  }
};
