// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //function calculateTimeFrame() {
    //}
    var theDate = dayjs().format('dddd, MMMM, DD, YYYY');
    var currentHour = dayjs().format('h');
    currentHour = 10;
    document.getElementById("headerDate").textContent = `Today is ${theDate}`;
    //set of ifs and else ifs define what colour/class each block is depending on what time it is
    if (currentHour >= 12) {
      $('#hour-9').removeClass('future');
      $('#hour-9').addClass('past');
      $('#hour-10').addClass('past');
      $('#hour-11').addClass('past');
    } else if(currentHour <= 8) {
        $('#hour-9').addClass('future');
        $('#hour-10').addClass('future');
        $('#hour-11').addClass('future');
    } else if(currentHour === 9) {
        $('#hour-9').addClass('present');
        $('#hour-10').addClass('future');
        $('#hour-11').addClass('future');
    } else if(currentHour === 10) {
        $('#hour-10').addClass('present');
        $('#hour-9').addClass('past');
        $('#hour-11').addClass('future');
    } else if(currentHour === 11) {
        $('#hour-9').addClass('past');
        $('#hour-10').addClass('past');
        $('#hour-11').addClass('present');
    }
  console.log(`Current hour is ${currentHour}`);
var buttonHour = "";
var textToStore = "";

//function for a button pressed to save, will store text to localstorage
$(":button").click(function() {
  if(this.id === 'save-button-9') {
    buttonHour = 9
    textToStore = document.getElementById('text-area-9').value;
    localStorage.setItem('9', textToStore);
  }
  else if(this.id === 'save-button-10') {
    buttonHour = 10
    textToStore = document.getElementById('text-area-10').value;
    localStorage.setItem('10', textToStore);
  }
  else if(this.id === 'save-button-11') {
    buttonHour = 11
    textToStore = document.getElementById('text-area-11').value;
    localStorage.setItem('11', textToStore);
  }
  console.log(`button hour is ${buttonHour}`);

  console.log(`${textToStore} stored to local storage`);
 })

})
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
