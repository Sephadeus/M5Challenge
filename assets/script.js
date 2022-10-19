var containerEl = document.querySelector(".container");
var text = $(this).siblings(".textarea").val();
var time = $(this).siblings(".textarea").attr("data-number");

function update() {
  $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
}
setInterval(update, 1000);

var containerElement = $("div");
containerElement.css("width", "100%");
containerElement.addClass("description");

//Array for times
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];
//Array for military time values
var milTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//console.log(times)
console.log(time)
var savedTasks = localStorage.getItem(time);
console.log(savedTasks);
//  Add a div for each work day hour
for (var i = 0; i < times.length; i++) {
  // Time Block Div
  var timeBlockElement = $("<div>");
  timeBlockElement.addClass("row time-block");

  console.log(timeBlockElement);
  // Hour
  var timeHour = $("<p>");
  timeHour.addClass("hour");

  if (milTimes[i] >= 9 && milTimes[i] < 12) {
    timeHour.text(times[i] + " AM");
  } else {
    timeHour.text(times[i] + " PM");
  }
  // Event
  var inputSchedule = $("<input>");
  inputSchedule.attr("text");
  inputSchedule.addClass("textarea input");
  inputSchedule.attr("data-number", milTimes[i]);
  inputSchedule.css("width", "70%");
  inputSchedule.val(localStorage.getItem(times[i]));


  var listTask = $("<li>");
  listTask.addClass("listTask");
  listTask.attr("data-number", milTimes[i]);
  listTask.text(savedTasks);

  var myTasks = [];
  // Save Button
  var saveButton = $("<button>");
  saveButton.addClass("saveBtn saveBtn i:hover textarea");
  saveButton.text("Save");

  saveButton.on("click", function (event) {
    event.preventDefault();
    var text = $(this).siblings(".textarea").val();
    var time = $(this).siblings(".textarea").attr("data-number");

    console.log(time);
    console.log(text);

    /*var block = {
                timeAt: time,
                taskName: text
            }
            */

    localStorage.setItem(time, text);
  });

  // console.log(savedTasks);

  // Appending
  containerElement.append(timeBlockElement);
  timeBlockElement.append(timeHour);
  timeBlockElement.append(inputSchedule);
  timeBlockElement.append(saveButton);
}

function timeTracker() {
  var currentHour = moment().hour();

  //console.log(currentHour);

  //console.log($(".row"));

  $(".textarea").each(function () {
    var hourTime = $(this).attr("data-number");
    // Add class based on current time

    if (hourTime < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
      //console.log(hourTime);
    } else if (hourTime == currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
      //console.log(hourTime);
    } else if (hourTime > currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
      //console.log(hourTime);
    }
  });
}

timeTracker();
