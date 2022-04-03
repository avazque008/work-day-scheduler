// Display current date
var currentTime = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").append(currentTime);

var buttonClickHandler = function (event) {
    var time = $(this).parent().attr("hour");

    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, JSON.stringify(text));
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

var loadStorage = function (){

    $("#hour9 .description").val(JSON.parse(localStorage.getItem("9")));
    $("#hour10 .description").val(JSON.parse(localStorage.getItem("10")));
    $("#hour11 .description").val(JSON.parse(localStorage.getItem("11")));
    $("#hour12 .description").val(JSON.parse(localStorage.getItem("12")));
    $("#hour13 .description").val(JSON.parse(localStorage.getItem("13")));
    $("#hour14 .description").val(JSON.parse(localStorage.getItem("14")));
    $("#hour15 .description").val(JSON.parse(localStorage.getItem("15")));
    $("#hour16 .description").val(JSON.parse(localStorage.getItem("16")));
    $("#hour17 .description").val(JSON.parse(localStorage.getItem("17")));
}

loadStorage();


$(".saveBtn").on("click", buttonClickHandler);

auditTime();

setInterval(function() {
    auditTime();
}, (1000 * 60) );