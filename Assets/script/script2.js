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
    console.log(currentHour);
    var timeBlock = timeBlocks[i];
    var dataHour = timeBlock.getAttribute("data-hour");
    // console.log(dataHour);

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
setInterval(matchHour, 1000); // checking every minute to see if houris matched.

var textAreasEl = document.querySelectorAll("textarea");
console.log(textAreasEl);

