// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//variabls for past, present, future
var presentHour = dayjs().isSame(today, "hour"); //boolean
console.log(presentHour);
var futureHour = dayjs().isAfter(today, "hour"); //boolean
console.log(futureHour);
var pastHour = dayjs().isBefore(today, "hour"); //boolean
console.log(pastHour);
var today = dayjs();

$(function () {
  // $("#currentDay").text(today.format("MMMM D, YYYY hh:mm:ss A"));

  function displayDateTime() {
    var currentDayEl = $("#currentDay");
    var currentDateTime = dayjs().format("MMMM DD, YYYY hh:mm:ss A");
    currentDayEl.text(currentDateTime);
    // console.log(currentDateTime);
  }
  displayDateTime();
  setInterval(displayDateTime, 1000);

  if (presentHour){//confirmation is working
   var idEl = $('#hour-11'); 
   idEl.addClass('present');
  }

});



  // function presentHourDisplay() {
  // var currentHour = dayjs().format("hh");
  // console.log(currentHour);

  //   var idName = "hour-" + currentHour;
  //   var idEl = $(idName); //this element is only looking for the current hour.
  //   console.log('#idName');
  //   console.log(idEl);
  //   if (presentHour) {
  //     console.log("check");
  //     $(idEl).addClass("present");
  // //   }
  // }
  // presentHourDisplay();
  // setInterval(presentHourDisplay, 60000);

  // if (currentHour > pastHour){
  //   var testEl = $('#hour-09');
  //   console.log(testEl)
  //   $(testEl).addClass("past");
  // }

// $('#hour-03').addClass('present')

// if(idName.matches(idEl.id)){
//   console.log("working")
// } else {console.log("try again")}

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
