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

I had struggled using jquery for this exercise. I decided to see if I was able to accomplish the tast first but using vanilla javascript to first get confirm I can work throught the functionality of the the assignment. In the beginning, I had trouble locating certain elements on where I wanted to locate all the items. I decided to use a data attribute (data-hour) to compare the hour to dayj rather than worry about splitting the current ID to get a number returned to compare it against.

I then created a loop to search through the timblocks on the html. If the data-hour matched the current hour, I added the present class and removed all others and continued for if hours were greater for past - every other case I added future.

I think created a function to loop through all text areas and all save buttons. If the user clicks a save button, it will loop through the text area values on the page and save it to local storage. If the save button is double clicked, all items will be removed from local storage. (Same function just removed instead of set.)

After completing the desired outcome in vanilla javascript, I tried to convert what I did with the vanilla javascript to jquery, but I was not successfuly based on the time of the submission of the homework. I kept the javascript attached to it for the final submission.

1. https://api.jquery.com/category/manipulation/class-attribute/. For reviewing how to address add/removing/hiding classes using jquery.
   a. Essentially, we are going to compare the current hour to each of the id elements on the page. If the current hour matches the current ID in the HTML, we will need to create a function to change the class to address the color change.
   b. How to address the logic of the current hour to write a line of code for each hour.

2. https://developer.mozilla.org/en-US/docs/Web/API/Element/matches.

3. https://day.js.org/docs/en/query/is-same. Reviewed the isSame isAfter and isBefore documentation for day.js.

4. First piece solved was to get the current date and time to show at the top part. I used Boostrap to align the text and post current time.

5. https://stackoverflow.com/questions/1206739/find-all-elements-on-a-page-whose-element-id-contains-a-certain-text-using-jquer

6. HINT: What does `this` reference in the click listener function?. I references this article to see how I can implement "this" for the code. https://blog.kevinchisholm.com/javascript/the-javascript-this-keyword-deep-dive-jquery-click-handlers/. Essentially, using $('this') within an event listener of fuction, refers to the that action of fuuction. 

7. https://stackoverflow.com/questions/34189247/how-to-use-jquery-to-retrieve-only-the-second-item-in-a-comma-separated-value-on. Reading on how to retrieve the second half of the data.
