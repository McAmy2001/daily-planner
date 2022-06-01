const parentDivEl = document.getElementById("parent-div");


const nineAMEl = document.getElementById("nineAM");
const tenAMEl = document.getElementById("tenAM");
const elevenAMEl = document.getElementById("elevenAM");
const twelvePMEl = document.getElementById("twelvePM");
const onePMEl = document.getElementById("onePM");
const twoPMEl = document.getElementById("twoPM");
const threePMEl = document.getElementById("threePM");
const fourPMEl = document.getElementById("fourPM");
const fivePMEl = document.getElementById("fivePM");

//function saveTask(taskToSave) {
//  console.log(taskToSave);
//  localStorage.setItem("savedTasks", JSON.stringify([taskToSave]));
//}
//
function taskInput(target) {
  console.log(target);
  var targetEl = document.getElementById(target.id);
  console.log(targetEl);
  var taskToDo = prompt("Enter task:")
  targetEl.textContent = taskToDo;
  //var inputArea = document.createElement("input");
  //inputArea.setAttribute("type", "text");
  //targetEl.appendChild(inputArea);
  var taskToSave = {targetEl, taskToDo};
  saveTask(taskToSave);
};


 





function displayDate() {
  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');
  document.getElementById("currentDay").innerHTML = day + ', ' + date;
};
//setInterval(displayDate, (18 * 10**5));
displayDate();

//parentDivEl.addEventListener("click", function() {
//  var inputTask = (event.target);
//  //console.log(inputTask);
//  if (event.target.matches(".task-field")) {
//  taskInput(inputTask);
//  //}
//  //else if (event.target.matches(".saveBtn")) {
//  //  saveTask();
//  //}
//  //else {
//  //  //do nothing
//  //}
//}
//});
$(document).ready(function() {
 $('.saveBtn').on("click", function() {
   var value = $(this)
   .siblings(".task-field")
   .val();
   var time = $(this)
   .parent()
   .attr("id");
   localStorage.setItem(time, value);
 });
}); 

function hourUpdate() {
  var currentHour = moment().hours();
  $(".time-block").each(function() {
    var blockHour = parseInt(
      $(this)
      .attr("id")
      .split("-")[1]
    );
    if (blockHour < currentHour) {
      $(this).addClass("past");
    }
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
};
hourUpdate();

$("#nineAM .text-field").val(localStorage.getItem("nineAM"));

