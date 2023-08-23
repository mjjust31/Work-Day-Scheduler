// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var timeBlocks = $(".time-block");

$(function () {
  displayDateTime();
  setInterval(displayDateTime, 1000);
  matchHour();
  setInterval(matchHour, 1000);

  function displayDateTime() {
    var currentDayEl = $("#currentDay");
    var currentDateTime = dayjs().format("MMMM DD, YYYY hh:mm:ss A");
    currentDayEl.text(currentDateTime);
  }

  function matchHour() {
    $(".timeBlocks").each(function () {
      var currentHour = dayjs().format("H");
      var dataHour = parseInt($(this).data("hour"));

      if (dataHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
      } else if (dataHour > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      } else {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
    });
  }

  $("textarea").focus(function () {
    $(this).css("background", "#ffdefb");
  });

  $("textarea").blur(function () {
    $(this).css("background", "white");
  });
});

// var hour = attr("id").split("-")[1];
// console.log(hour);

// $('.save-btn').on('click', function(e) {
//   e.preventDefault();
//   var timeBlock = $(this).closest('.time-block');
//   var textarea = timeBlock.find('textarea');
//   var userInput = textarea.val();
//   var timeBlockId = timeBlock.attr('id');

//  var userInputString = JSON.stringify(userInput);
// //  var timeBlockIdString = JSON.stringify(timeBlockId);

//   // Save user input to localStorage
//   localStorage.setItem(timeBlockId, userInputString);
//   });
// for (let i = 9; i <= 17; i++) {

// $("textrea").on("keyup", function (event) {
//   event.preventDefault();
//   console.log("keyup");
// });

// for (var i = 9; i <= 17; i++) {
//   var saveText = localStorage.getItem("time-block-$[i]");
// }

// if (saveText) {
//   textarea = document.getElementById(`time-block-$[i]`).querySelector('textarea');
//   textarea.value = saveText;
// }

// $('div#hour-09').hide()

// if (currentHour === 9){
//   $('#hour-09').addClass('.present')
// } else if()

//   if (currentHour) {
//     //confirmation is working
//     var idEl = $(".container-fluid").find("div");
//     console.log(idEl);
//   }
// });

// var getHourId = $("*[id*=hour-]");
// getHourId.split();
// console.log(getHourId);

// hourBands.each(function () {
//   var hour = parseInt($(this).attr("id").split("-")[1]);//searching through the container-fluid and looking for id and converting to number with parseInt.

//   if (hour < currentHour) {
//     $(this).addClass("past");
//   } else if (hour === currentHour) {
//     $(this).addClass("present");
//   } else {
//     $(this).addClass("future");
//   }
// });})

// function presentHourDisplay() {

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
