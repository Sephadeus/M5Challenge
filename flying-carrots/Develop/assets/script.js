var containerEl = document.querySelector(".container");


function update() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);




var containerElement = $('div');
    containerElement.css('width', '100%')
    containerElement.addClass('description')
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var milTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(times)

//Object for military time value
/*const milTimes = {
           9: 9,
           10: 10,
           11: 11,
           12: 12,
           1: 13,
           2: 14,
           3: 15,
           4: 16,
           5: 17
                };
    
var regHours = Object.keys(milTimes);
    console.log(regHours);
    
var milHours = Object.values(milTimes);
    
    console.log(milHours);

    console.log(Object.keys(milTimes));*/

//  Add a div for each work day hour


for (var i = 0; i < times.length; i++) {

        // Time Block Div
    var timeBlockElement = $('<div>');
    timeBlockElement.addClass('row time-block');
    timeBlockElement.attr('id', milTimes[i]);
    console.log(timeBlockElement["id"])
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
        inputSchedule.addClass('textarea');
        inputSchedule.attr('data-number', times[i])
        inputSchedule.css('width', '70%');   
        

        // inputSchedule.addId('hours').foreach('')
    var myTasks = [];
        // Save Button
    var saveButton = $('<button>');
        saveButton.addClass('saveBtn saveBtn i:hover textarea');
        saveButton.text('Save')

        saveButton.on("click", function(event) {
            event.preventDefault();

            var text = $(this).siblings('.textarea').val();
            
            var time = $(this).siblings('.hour').text().trim();

            var block = {
                timeAt: time,
                taskName: text
            }

            console.log(block);
            myTasks.push(block);
            console.log(myTasks);
           
            localStorage.setItem("block", JSON.stringify(myTasks));
        });
       
    
        // Appending
    containerElement.append(timeBlockElement)
    timeBlockElement.append(timeHour)
    timeBlockElement.append(inputSchedule)
    timeBlockElement.append(saveButton)
}


function timeTracker() {
    
    var currentHour = moment().hour();

    console.log(currentHour);
    let allElems = [];
        for (let i = 0; i < milTimes.length; i++) {
        var hourTime = milTimes[i];
        var elem = $(hourTime);

        allElems.push(elem)
console.log(allElems);
        console.log(hourTime);
        
        console.log($(".row"));
        // Add class based on current time
        if (hourTime < currentHour ) {
            elem.removeClass("future");
            elem.removeClass("present");
            elem.addClass("past");
            console.log(hourTime);

        } else if (hourTime == currentHour) {
            elem.removeClass("future");
            elem.removeClass("past");
            elem.addClass("present");
            console.log(hourTime);
        } else {
            elem.removeClass("past");
            elem.removeClass("present");
            elem.addClass("future");
            console.log(hourTime);
        }
    };
}


timeTracker();