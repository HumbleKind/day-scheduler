$(document).ready(function(){
// group all code here to run when DOM is ready

    var currentHour = moment().format('HH');

    var timeBlock = $(".time-block");
    // console.log(timeBlock);

    $("#current-day").text(moment().format('dddd[,] LL'));

    timeBlock.each(function() {

        // NOTE: review the following ...
        // console.log(this); // the element itself ... grabs entire html time-block div (current scope)
        // console.log($(this)); // jQuery wrapper-object around the element
        // console.log($(this).attr("data-hour"));
        // console.log($(this).data("hour"));
    
        var thisHour = 10; //parseInt($(this).data("hour"));

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