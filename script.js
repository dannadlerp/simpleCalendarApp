// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    $("#save-button-past").click(function() {
    var userInput = $('#hour-9').text;
    alert("stored to local storage");
    localStorage.setItem($("textarea#textArea-9").val(), $("#hour-9"));
    console.log(localStorage);
  })
    var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDay();
  var currentYear = currentDate.getFullYear();
  var dayOfTheWeek = "empty";
  var getDayOfTheWeek= function() {
    if(currentDay === 0) {dayOfTheWeek = "Sunday"; console.log("Sun.");}
      else if(currentDay === 1) {dayOfTheWeek = "Monday"; console.log("Mon.");}
      else if(currentDay === 2) {dayOfTheWeek = "Tuesday"; console.log("Tues.");}
      else if(currentDay === 3) {dayOfTheWeek = "Wednesday"; console.log("Wed.");}
      else if(currentDay === 4) {dayOfTheWeek = "Thursday"; console.log("Thurs.");}
      else if(currentDay === 5) {dayOfTheWeek = "Friday"; console.log("Fri.");}
      else if(currentDay === 6) {dayOfTheWeek = "Saturday"; console.log("Sat.");}
  }
  var dateFormatted = `Current date: ${dayOfTheWeek}, ${currentMonth}, ${currentYear}`;
  console.log(`Current date: ${dayOfTheWeek}, ${currentMonth}, ${currentYear}`);
  $('headerDate').text(currentDate);
  var timeScheduler = {}
}

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
  // TODO: Add code to display the current date in the header of the page.
)
