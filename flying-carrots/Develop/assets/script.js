var containerEl = document.querySelector(".container");


function update() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);




var containerElement = $('div');
    containerElement.css('width', '100%')
    containerElement.addClass('description')

//Array for times
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];
//Array for military time values
var milTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(times)



//  Add a div for each work day hour
for (var i = 0; i < times.length; i++) {

    var savedTasks = JSON.parse(localStorage.getItem("block"));
    console.log(savedTasks);
        // Time Block Div
    var timeBlockElement = $('<div>');
    timeBlockElement.addClass('row time-block');

    console.log(timeBlockElement)
        // Hour
    var timeHour = $('<p>');
        timeHour.addClass('hour')

        if (milTimes[i] >= 9 && milTimes[i] < 12){
        timeHour.text(times[i] + " AM")
        } else {
            timeHour.text(times[i] + " PM")
        }
        // Event
    var inputSchedule = $('<input>');
        inputSchedule.attr('text')
        inputSchedule.addClass('textarea input');
        inputSchedule.attr('data-number', milTimes[i])
        inputSchedule.css('width', '70%');   
        
    var listTask = $('<li>');
        listTask.addClass('listTask');
        listTask.attr('data-number', milTimes[i]);
        listTask.text(savedTasks[i].taskName);
       
    var myTasks = [];
        // Save Button
    var saveButton = $('<button>');
        saveButton.addClass('saveBtn saveBtn i:hover textarea');
        saveButton.text('Save')

        saveButton.on("click", function(event) {
            event.preventDefault();

            var text = $(this).siblings('.textarea').val();
            
            var time = $(this).siblings('.textarea').attr("data-number");

            var block = {
                timeAt: time,
                taskName: text
            }


            console.log(block);
            myTasks.push(block);
            console.log(myTasks);
           
            localStorage.setItem("block", JSON.stringify(myTasks));
        });
       
        var savedTasks = JSON.parse(localStorage.getItem("block"));
        console.log(savedTasks);
    
        // Appending
    containerElement.append(timeBlockElement)
    timeBlockElement.append(timeHour)
    timeBlockElement.append(inputSchedule)
    timeBlockElement.append(saveButton)
}


function timeTracker() {
    
    var currentHour = moment().hour();

    console.log(currentHour);
        
        console.log($(".row"));

    $(".textarea").each(function() {
        
        var hourTime = $(this).attr("data-number");
        // Add class based on current time
        
        if (hourTime < currentHour ) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
            console.log(hourTime);

        } else if (hourTime == currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
            console.log(hourTime);
        } else if (hourTime > currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            console.log(hourTime);
        }
    });
}

timeTracker();