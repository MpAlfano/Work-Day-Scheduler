let timeDisplayEl = $('#time-display');
let dateDisplayEl = $('#currentDay');

let timeNow;

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


//Function to retrieve local storage



//Function to sort local storage into timeblocks



//Function to save to local storage



//Function to run when timeblock is clicked on

$( function() {
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });
} );

//Function to run when save is clicked on
$( function() {
    $( "#selectable2" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable2 li" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });
} );


//Event listener for click on timeblock


//Event listener for click on saveblock



//To run when page loads
$(function() {
    displayDate()
});
setInterval(displayTime, 1000);