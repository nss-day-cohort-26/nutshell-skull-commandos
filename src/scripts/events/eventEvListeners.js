const eventDatabaseHandler = require("./eventDatabaseHandler");
const eventsPrinter = require("./eventPrinter");

$("#eventForm-container").on("click", "#submit-btn", () => {
    const eventNameInput = $("#eventName-input").val();
    const eventDateInput = $("#eventDate-input").val();
    const eventLocationInput = $("#eventLocation-input").val();
    const newEvent = {
        name: eventNameInput,
        date: eventDateInput,
        location: eventLocationInput
    }
    eventDatabaseHandler.postEvent(newEvent)
        .then(() => {
            return eventDatabaseHandler.getAllEvents()
        })
        .then(eventArray => {
            eventsPrinter.printEvents(eventArray)
        })
})