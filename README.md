# Work-Day-Scheduler

Live link: https://mjjust31.github.io/Work-Day-Scheduler/



User Story


AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


1. https://api.jquery.com/category/manipulation/class-attribute/. For reviewing how to address add/removing/hiding classes using jquery. 
      a. Essentially, we are going to compare the current hour to each of the id elements on the page. If the current hour matches the current ID in the HTML, we will need to create a function to change the class to address the color change.
      b. How to address the logic of the current hour to write a line of code for each hour. 

2. https://developer.mozilla.org/en-US/docs/Web/API/Element/matches. 