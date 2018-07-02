const eventsPrinter = Object.create({}, {
    printEvents: {
        value: function (eventArray) {
            $("#event-container").empty();
            eventArray.forEach((event) => {
                const $eventDiv = $("<div>").attr("id", event.id)
                $("<h4>").text(event.name).appendTo($eventDiv);

                $("<button>").text("Delete").addClass("delete-btn").appendTo($eventDiv);
                $($eventDiv).appendTo("#event-container");
            })
        }
    }
})
module.exports = eventsPrinter;