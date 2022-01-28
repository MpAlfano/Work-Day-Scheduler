let timeDisplayEl = $('#time-display');
let dateDisplayEl = $('#currentDay');
let saveButtonEl = $('.time-block')
let pastPresentFuture = document.querySelectorAll(".description");
const pastPresentFutureArr = Array.from(pastPresentFuture);

let timeNow;
// remove later

//Function to track current date and time

function displayTime() {
    timeNow = moment().format('k');
    timeDisplayEl.text(timeNow);
}
  
//Function to display date at top of page
function displayDate() {
    var dateRightNow = moment().format('MMM DD, YYYY');
    dateDisplayEl.text(dateRightNow);
}

//Function to color in the times if passed
for (i=0; i < pastPresentFutureArr.length; i++) {
  let pastPresentFutureEl = pastPresentFutureArr[i];
  let currentTime = parseInt(moment().format("k"));
  let pastPresentFutureVal = parseInt(pastPresentFutureEl.getAttribute("id"));
  console.log(pastPresentFutureEl.getAttribute("id"));
  console.log(currentTime)

  if (pastPresentFutureVal == currentTime) {
    pastPresentFutureEl.setAttribute('class', "description col-md-10 present");
    console.log(pastPresentFutureVal)
  } else if (pastPresentFutureVal < currentTime) {
    pastPresentFutureEl.setAttribute('class', "description col-md-10 past");
    console.log(pastPresentFutureVal)
  } else if (pastPresentFutureVal > currentTime) {
    pastPresentFutureEl.setAttribute('class', "description col-md-10 future");
    console.log(pastPresentFutureVal)
    console.log(currentTime)
  }

}


//Function to retrieve local storage
//Function to sort local storage into timeblocks
for (let i = 9; i < 18; i++ ) {
  storageText = localStorage.getItem(i);

  if (i === 9) {
    document.getElementById('9').value = storageText
  } else if (i === 10) {
    document.getElementById('10').value = storageText
  } else if (i === 11) {
    document.getElementById('11').value = storageText
  } else if (i === 12) {
    document.getElementById('12').value = storageText
  } else if (i === 13) {
    document.getElementById('13').value = storageText
  } else if (i === 14) {
    document.getElementById('14').value = storageText
  } else if (i === 15) {
    document.getElementById('15').value = storageText
  } else if (i === 16) {
    document.getElementById('16').value = storageText
  } else if (i === 17) {
    document.getElementById('17').value = storageText
  }
  console.log(storageText)
}


//Function to run when save is clicked on
let saveTargetButton = function(event) {
  let saveTarget = (event.target.id);
  let saveText = "";

  console.log(saveTarget)
  



  //use .split('') for \ to try to get to return
  if (saveTarget == 9) {
    saveText = document.getElementById('9').value
  } else if (saveTarget == 10) {
    saveText = document.getElementById('10').value
  } else if (saveTarget == 11) {
    saveText = document.getElementById('11').value
  } else if (saveTarget == 12) {
    saveText = document.getElementById('12').value
  } else if (saveTarget == 13) {
    saveText = document.getElementById('13').value
  } else if (saveTarget == 14) {
    saveText = document.getElementById('14').value
  } else if (saveTarget == 15) {
    saveText = document.getElementById('15').value
  } else if (saveTarget == 16) {
    saveText = document.getElementById('16').value
  } else if (saveTarget == 17) {
    saveText = document.getElementById('17').value  
  }

  localStorage.setItem(saveTarget, (saveText));

}  
//Event listener for click on saveblock
saveButtonEl.on('click', '.save-btn', saveTargetButton);

//To run when page loads
$(function init() {
    displayDate();
});
setInterval(displayTime, 1000);