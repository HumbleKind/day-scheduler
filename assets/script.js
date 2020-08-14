$(document).ready(function(){
// group all code here to run when DOM is ready

    var timeBlock = $(".time-block");
    // console.log(timeBlock);

    var currentHour = moment().format('HH');

    timeBlock.each(function() {
    
    // NOTE: review the following ...
    // console.log($(this));
    // console.log(this.innerText);
    // console.log($(this).attr("data-hour"));
    // console.log($(this).data("hour"));

        var thisHour = parseInt($(this).data("hour"));

        if (thisHour == currentHour) {
            // change time-block div class to 'present'
        } else if (thisHour < currentHour) {
            // change time-block div class to 'past'
        } else if (thisHour > currentHour) {
            // change time-block div class to 'future'
        }
    })

});