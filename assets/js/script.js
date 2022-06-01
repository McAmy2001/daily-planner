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

function saveTask(taskToSave) {
  console.log(taskToSave);
}

function taskInput(target) {
  console.log(target);
  var targetEl = document.getElementById(target.id);
  var taskToDo = prompt("Enter task:")
  targetEl.textContent = taskToDo;
  //var inputArea = document.createElement("input");
  //inputArea.setAttribute("type", "text");
  //targetEl.appendChild(inputArea);
  var taskToSave = "test";
  saveTask(taskToSave);
};


 





function displayDate() {
  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');
  document.getElementById("currentDay").innerHTML = day + ', ' + date;
};
//setInterval(displayDate, (18 * 10**5));
displayDate();

parentDivEl.addEventListener("click", function() {
  var inputTask = (event.target);
  //console.log(inputTask);
  if (event.target.matches(".task-field")) {
  taskInput(inputTask);
  //}
  //else if (event.target.matches(".saveBtn")) {
  //  saveTask();
  //}
  //else {
  //  //do nothing
  //}
}
});
