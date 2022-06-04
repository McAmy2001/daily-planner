//Display current date
function displayDate() {
  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');
  document.getElementById("currentDay").innerHTML = day + ', ' + date;
};
displayDate();

//Save button function
$(document).ready(function() {
 $('.saveBtn').on("click", function() {
   var value = $(this).siblings(".task-field").val();
   var time = $(this).parent().attr("id");
   localStorage.setItem(time, value);
 });
}); 

//Change background colors according to time
function hourUpdate() {
  var currentHour = moment().hours();
  $(".time-block").each(function() {
    var blockHourString = $(this).attr("id");
    var timeNumber = blockHourString.substring(4);
    var numNumber = parseInt(timeNumber);
    if (numNumber < currentHour) {
      $(this).children("textarea.task-field").addClass("past");
    }
    else if (numNumber === currentHour) {
      $(this).children("textarea.task-field").removeClass("past");
      $(this).children("textarea.task-field").addClass("present");
    }
    else {
      $(this).children("textarea.task-field").removeClass("past");
      $(this).children("textarea.task-field").removeClass("present");
      $(this).children("textarea.task-field").addClass("future");
    }
  });
};
hourUpdate();

//Retrieving saved items from local storage
$("#time9 .task-field").val(localStorage.getItem("time9"));
$("#time10 .task-field").val(localStorage.getItem("time10"));
$("#time11 .task-field").val(localStorage.getItem("time11"));
$("#time12 .task-field").val(localStorage.getItem("time12"));
$("#time13 .task-field").val(localStorage.getItem("time13"));
$("#time14 .task-field").val(localStorage.getItem("time14"));
$("#time15 .task-field").val(localStorage.getItem("time15"));
$("#time16 .task-field").val(localStorage.getItem("time16"));
$("#time17 .task-field").val(localStorage.getItem("time17"));


