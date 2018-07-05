const eventDatabaseHandler = require("./eventDatabaseHandler");
const eventsPrinter = require("./eventPrinter");
// submit button event listener
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
// delete button event listener
$("#event-container").on("click", "delete-btn", () => {
    const eventID = $(event.target).parent().attr("id")
    eventDatabaseHandler.deleteEvent(eventID)
    .then(() => {
        return eventDatabaseHandler.getAllEvents()
    })
    .then((eventArray) => {
        eventsPrinter.printEvents(eventArray)
    })
})