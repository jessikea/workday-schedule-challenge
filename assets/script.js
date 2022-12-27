// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

$(function () { 
  var currentDay =$('#currentDay');
  var saveBtns = $('.saveBtn');//all of the save btns
  var timeBlock = $('.time-block'); //each time block


  var currentTime = parseInt(dayjs().format('H')); // just the current hr conv to integer


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function checkTime() {

    $(timeBlock).each(function () {

      // splitting the hour-# id makes it into an array of strings. The # is indexed at [1] and is then compared to the current time
      if (currentTime == (this.id.split("hour-")[1])) { 
        $(this).addClass("present") //class of present is added if current time and split hour are the same
      }
 
      if (currentTime > (this.id.split("hour-")[1])) {
        $(this).addClass("past")// class of past is added if current time is greater split hour 
      }  
      
      if (currentTime < (this.id.split("hour-")[1])) {
        $(this).addClass("future") //class of future is added if current time is less than split hour
      }
      
    })  
  
  };

// TODO: Add code to display the current date in the header of the page.
//displaying date
  function dateDisplayed() {
    var currentDate = dayjs().format("dddd, MMMM DD"); //displays format of day of week, month day
    currentDay.text(currentDate); //puts text in the currentDay text
    checkTime() //checks time hour on schedule;
  };

  
  // Save buttons  
// TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

  //save buttons and function
  function saveText () {
    $(timeBlock).each(function() {
      $(this).children('.description').text(localStorage.getItem($(this).attr('id')));
      console.log(localStorage.getItem($(this).attr('id')));
      console.log($(this).children('.description'));
    })
  }
//on click for saveBtns, description and time  is set into local storage
  $(saveBtns).on('click', function () {
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, description);
  });

  dateDisplayed();
  saveText();
});

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });
  