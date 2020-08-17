$(document).ready(function(){
// group all code here to run when DOM is ready

    // variable for the moment.js time information
    var currentHour = moment().format('HH');
    // console.log(currentHour);

    // variable to get the time block divs
    var timeBlock = $(".time-block");
    // console.log(timeBlock);

    // populates the jumbotron with the moment.js day/ time information
    $("#current-day").text(moment().format('dddd[,] LL'));

    // the following function cycles through each time block
    timeBlock.each(function() {

        // NOTE: review the following ...
        // console.log(this); // the element itself ... grabs entire html time-block div (current scope)
        // console.log($(this)); // jQuery wrapper-object around the element
        // console.log($(this).attr("data-hour"));
        // console.log($(this).data("hour"));
    
        // local variable for the time block hour value (i.e. 10)
        var thisHour = parseInt($(this).data("hour"));

        // removes either past, present, and/ or future class from time block div
        $(this).removeClass("past present future");

        if (thisHour == currentHour) {
            // change time-block div class to 'present'
            $(this).addClass("present");
        } else if (thisHour < currentHour) {
            // change time-block div class to 'past'
            $(this).addClass("past");
        } else if (thisHour > currentHour) {
            // change time-block div class to 'future'
            $(this).addClass("future");
        }
    })

});