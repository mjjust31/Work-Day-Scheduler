var timeBlocks = document.querySelectorAll(".time-block");

// var divEl = document.querySelectorAll("div");
console.log(timeBlocks);

function displayDate() {
  var currentDayEl = document.querySelector("#currentDay");
  // console.log(currentDayEl);
  var dateAndTime = dayjs().format("dddd, MMMM DD YYYY, HH:mm:ss");
  // console.log(dateAndTime);
  currentDayEl.textContent = dateAndTime;
}

displayDate();
setInterval(displayDate, 1000);

function matchHour() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var currentHour = dayjs().format("HH"); //this needed to be inside the function to get the updated hour when the function is called.
    // console.log(currentHour);
    var timeBlock = timeBlocks[i];
    var dataHour = timeBlock.getAttribute("data-hour");
    // console.log(dataHour);

    if (dataHour === currentHour) {
      timeBlock.classList.add("present");
      timeBlock.classList.remove("future");
      timeBlock.classList.remove("past");
    } else if (dataHour > currentHour) {
      timeBlock.classList.add("future");
      timeBlock.classList.remove("present");
      timeBlock.classList.remove("past");
    } else {
      timeBlock.classList.add("past");
      timeBlock.classList.remove("present");
      timeBlock.classList.remove("future");
    }
  }
}
matchHour();
setInterval(matchHour, 1000); // checking every minute to see if houris matched.

function loadSavedText() {
  for (let i = 0; i < textAreasEl.length; i++) {
    var textArea = textAreasEl[i];
    var savedText = localStorage.getItem(textArea.id);

    if (savedText) {
      textArea.value = savedText;
    }
  }
}

function loadSavedText() {
  for (let i = 0; i < textAreasEl.length; i++) {
    var textArea = textAreasEl[i];
    var savedText = localStorage.getItem(textArea.id);

    if (savedText) {
      textArea.value = savedText;
    }
  }
}

var textAreasEl = document.querySelectorAll("textarea");
var descriptionEl = document.querySelectorAll(".description");
var saveButton = document.querySelectorAll(".saveBtn");

console.log(textAreasEl);
console.log(descriptionEl);
console.log(textAreasEl.value);

function saveToLocal() {
  for (var i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", function (event) {
      event.preventDefault();
      for (var i = 0; i < textAreasEl.length; i++) {
        var textValue = textAreasEl[i].value;
        var textId = textAreasEl[i].getAttribute("id");

        // if (textValue.trim() === '') {
        //   var savedItemId = document.querySelector("#savedItem");
        //   savedItemId.textContent =
        //     "Please save a task for your Work Day scheduler";
        // } else {
        localStorage.setItem(textId, textValue);
      }
      displayMessage();
    });
  }
}

saveToLocal();
loadSavedText();

function displayMessage() {
  var savedItemId = document.querySelector("#savedItem");
  savedItemId.textContent =
    " Your item was saved to local storage! Double click the save button to remove all items from local storage 💗";

  setTimeout(function () {
    savedItemId.textContent = "";
  }, 10000);
}

function removeLocal() {
  for (var i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("dblclick", function (event) {
      event.preventDefault();
      for (var i = 0; i < textAreasEl.length; i++) {
        var textValue = textAreasEl[i].value;
        var textId = textAreasEl[i].getAttribute("id");
        localStorage.removeItem(textId, textValue);
      }
      removeMessage();
    });
  }
}
removeLocal();

function removeMessage() {
  var savedItemId = document.querySelector("#savedItem");
  savedItemId.textContent = " Your item was removed from local storage! 💗";

  setTimeout(function () {
    savedItemId.textContent = "";
  }, 7000);
}
