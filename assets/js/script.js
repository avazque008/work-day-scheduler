// Display current date
var currentTime = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").append(currentTime);


var buttonClickHandler = function () {
    var time = $(this).parent().attr("hour");
    console.log(time);

    var text = $(this).siblings(".description").val();
    console.log(text);

    localStorage.setItem(text, time);
};

var auditTime = function() {
    var currentHour = parseInt(moment().format("H"));

    var textBlock = $(".description");

    textBlock.each(function(){
        var hour = parseInt($(this).parent().attr("hour"));
        if (currentHour > hour) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");  
        } else if (currentHour < hour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};


$(".saveBtn").on("click", buttonClickHandler);

auditTime();

setInterval(function() {
    auditTime();
}, (1000 * 60) );