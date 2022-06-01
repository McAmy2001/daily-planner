const nineAMEl = document.getElementById("nineAM");
nineAMEl.addEventListener("click", function() {
  console.log("clicked");
  });

  const tenAMEl = document.getElementById("tenAM");
tenAMEl.addEventListener("click", function() {
  console.log("clicked");
  });

  const elevenAMEl = document.getElementById("elevenAM");
elevenAMEl.addEventListener("click", function() {
  console.log("clicked");
  });

  const twelvePMEl = document.getElementById("twelvePM");
twelvePMEl.addEventListener("click", function() {
  console.log("clicked");
  });



 





function displayDate() {
  const day = moment().format('dddd');
  const date = moment().format('MMMM Do YYYY');
  document.getElementById("currentDay").innerHTML = day + ', ' + date;
};
//setInterval(displayDate, 18 * 10**5);
displayDate();



