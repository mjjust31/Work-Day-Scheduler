var timeBlocks = document.querySelectorAll(".time-block");
// var divEl = document.querySelectorAll("div");
console.log(timeBlocks);

var currentHour = dayjs().format("HH");
console.log(currentHour);

function displayDate() {
  var currentDayEl = document.querySelector("#currentDay");
  // console.log(currentDayEl);

  var dateAndTime = dayjs().format("YYYY MMM dddd HH:mm:ss");
  // console.log(dateAndTime);

  currentDayEl.textContent = dateAndTime;
}

displayDate();
setInterval(displayDate, 1000);

function matchHour() {
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlock = timeBlocks[i];

    var dataHour = timeBlock.getAttribute("data-hour");
    console.log(dataHour);

    if (dataHour === currentHour) {
      timeBlock.classList.add("present");
    } else if (dataHour > currentHour) {
      timeBlock.classList.add("future");
    } else {
      timeBlock.classList.add("past");
    }
  }
}
matchHour();
setInterval(matchHour, 60000);
