/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet (timeString){
 
  var splitTime = timeString.split(":");

  newTimeString = splitTime[0];

  if (newTimeString < 12){
    return "Good Morning"
  }

  else if (newTimeString >= 1 && newTimeString < 17) {
    return "Good Afternoon"
  }

  else if (newTimeString >= 17){
    return "Good Evening"
  }
}

function displayMessage(time) {
  console.log(time)
}