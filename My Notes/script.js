// Other Variables
let clickNum = 0;
let clickNum2 = 0;
let numClick = 0;

// Text Boxes
let noteTitle = document.getElementsByClassName("noteTitle")[0];
let description = document.querySelector("#description");
let date = document.querySelector("#date");
let publisher = document.querySelector(".publisher");

// Buttons
let clearTitle = document.querySelector(".clearTitle");
let clearDescription = document.querySelector(".clearDescription");
let clearAll = document.querySelector(".clearAll");
let bullet = document.querySelector(".bullet");
let arrow = document.querySelector(".arrow");
let ordered = document.querySelector(".ordered");
let clearDate = document.querySelector(".clearDate");
let clearPub = document.querySelector(".clearPub");
var delNote = document.querySelector(".delete");
var shareNote = document.querySelector(".share");
let saveNote = document.querySelector(".save");

// Sounds
let clickSound = new Audio("sounds/click.mp3");
let otherClickSound = new Audio("sounds/otherClick.mp3");

// Functions
clearTitle.addEventListener("click", () => {
  noteTitle.value = "";
  clickSound.play();
});

clearDescription.addEventListener("click", () => {
  description.value = "";
  clickSound.play();
  clickNum = 0;
  clickNum2 = 0;
  numClick = 0;
  ordered.innerHTML = 1;
});

clearAll.addEventListener("click", () => {
  otherClickSound.play();
  noteTitle.value = "";
  description.value = "";
  date.value = "";
  publisher.value = "";
  clickNum = 0;
  clickNum2 = 0;
  numClick = 0;
  ordered.innerHTML = 1;
});

bullet.addEventListener("click", () => {
  otherClickSound.play();
  clickNum += 1;
  clickNum2 += 1;
  if (clickNum == 1 && clickNum2 == 1) {
    description.value += "•";
  } else {
    description.value += "\n•";
  }
});

arrow.addEventListener("click", () => {
  otherClickSound.play();
  clickNum2 += 1;
  clickNum += 1;
  if (clickNum2 == 1 && clickNum == 1) {
    description.value += "‣";
  } else {
    description.value += "\n‣";
  }
});

ordered.addEventListener("click", () => {
  otherClickSound.play();
  clickNum += 1;
  clickNum2 += 1;
  numClick += 1;
  if (numClick == 1 && clickNum2 == 1 && clickNum == 1) {
    ordered.innerHTML = Number(ordered.innerHTML, 10);
    description.value += ordered.innerHTML;
  } else {
    ordered.innerHTML = Number(ordered.innerHTML, 10) + 1;
    description.value += "\n" + ordered.innerHTML;
  }
});

clearDate.addEventListener("click", () => {
  otherClickSound.play();
  date.value = "";
});

clearPub.addEventListener("click", () => {
  otherClickSound.play();
  publisher.value = "";
});

saveNote.addEventListener("click", function(e) {
  otherClickSound.play();
  let addTxt = document.getElementById("description");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
      notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});
