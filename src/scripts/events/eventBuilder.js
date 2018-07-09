const eventForm = Object.create({}, {
    buildEventForm: {
        value: () => {
            const $eventFormDiv = $("<div>").attr("id", "form");
            $("<input>").attr("id", "eventName-input").attr("placeholder", "Event").appendTo($eventFormDiv);
            $("<input>").attr("id", "eventDate-input").attr("placeholder", "Event Date").appendTo($eventFormDiv);
            $("<input>").attr("id", "eventLocation-input").attr("placeholder", "Event Location").appendTo($eventFormDiv);
            $("<button>").attr("id", "submit-btn").text("Submit Event").appendTo($eventFormDiv);
            $("<button>").attr("id", "update-btn").text("Update Event").appendTo($eventFormDiv);
            $eventFormDiv.appendTo($("#eventForm-container"))
        }
    }
})

module.exports = eventForm;