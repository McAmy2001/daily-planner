function displayDate() {
  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');
  document.getElementById("currentDay").innerHTML = day + ', ' + date;
};
//setInterval(displayDate, (18 * 10**5));
displayDate();

$(document).ready(function() {
 $('.saveBtn').on("click", function() {
   var value = $(this).siblings(".task-field").val();
   var time = $(this).parent().attr("id");
   localStorage.setItem(time, value);
 });
}); 

function hourUpdate() {
  var currentHour = moment().hours();
  console.log(currentHour);
  $(".time-block").each(function() {
    //console.log($(this).children("textarea.task-field"));
    var blockHourString = $(this).attr("id");
    //console.log(blockHourString);
    var timeNumber = blockHourString.substring(4);
    //console.log(timeNumber);
    var numNumber = parseInt(timeNumber);
    //console.log(numNumber);
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
  setInterval(hourUpdate, 60000);
};
hourUpdate();

$("#time9 .text-field").val(localStorage.getItem("time9"));
$("#time10 .text-field").val(localStorage.getItem("time10"));
$("#time11 .text-field").val(localStorage.getItem("time11"));
$("#time12 .text-field").val(localStorage.getItem("time12"));
$("#time13 .text-field").val(localStorage.getItem("time13"));
$("#time14.text-field").val(localStorage.getItem("time14"));
$("#time15 .text-field").val(localStorage.getItem("time15"));
$("#time16 .text-field").val(localStorage.getItem("time16"));
$("#time17 .text-field").val(localStorage.getItem("time17"));


