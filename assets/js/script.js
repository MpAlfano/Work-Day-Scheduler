let timeDisplayEl = $('#time-display');
let dateDisplayEl = $('#currentDay');
let saveButtonEl = $('.time-block')

let id = $(this).attr('id');

//use queryselectorAll('btn') to select all buttons



let timeNow;
// remove later
let todos;

//Function to track current date and time

function displayTime() {
    var rightNow = moment().format('hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
  
//Function to display date at top of page
function displayDate() {
    var dateRightNow = moment().format('MMM DD, YYYY');
    dateDisplayEl.text(dateRightNow);
}

//Function to color in the times if passed



//Function to retrieve local storage



// // Get stored todos from localStorage
// var stored9 = JSON.parse(localStorage.getItem("9"));

// // If todos were retrieved from localStorage, update the todos array to it
// if (storedTodos !== null) {
//   todos = storedTodos;
// }
// console.log(storedTodos)
// // This is a helper function that will render todos to the DOM





//Function to sort local storage into timeblocks

$(saveButton).click(function() {

  localStorage.setItem(id, impVal());
  let saveInput = localStorage
})

$(".time-block").each(function() {
  let impValue = $(this).find('#impValue');
  let id =$(this).attr('id');
  let saveValue = localStorage.getItem(id);
  impValue.val(saveValue)

});

//Function to run when save is clicked on


let saveTargetButton = function(event) {
  let saveTarget = (event.target.id);
  let saveText = "";

  console.log(saveTarget)
  
  if (saveTarget == 9) {
    saveText = document.getElementById('input9').value
  } else if (saveTarget == 10) {
    saveText = document.getElementById('input10').value
  } else if (saveTarget == 11) {
    saveText = document.getElementById('input11').value
  } else if (saveTarget == 12) {
    saveText = document.getElementById('input12').value
  } else if (saveTarget == 13) {
    saveText = document.getElementById('input13').value
  } else if (saveTarget == 14) {
    saveText = document.getElementById('input14').value
  } else if (saveTarget == 15) {
    saveText = document.getElementById('input15').value
  } else if (saveTarget == 16) {
    saveText = document.getElementById('input16').value
  } else if (saveTarget == 17) {
    saveText = document.getElementById('input17').value  
  }

  localStorage.setItem(saveTarget, JSON.stringify(saveText));

}  
//Event listener for click on saveblock

saveButtonEl.on('click', '.save-btn', saveTargetButton);

//To run when page loads
$(function() {
    displayDate()
});
setInterval(displayTime, 1000);

//init()