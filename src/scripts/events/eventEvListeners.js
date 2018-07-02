const eventDatabaseHandler = require("./eventDatabaseHandler");

const eventsPrinter = require("./eventPrinter");

$("#eventForm-container").on("click", "#submit-btn", () => {
    const eventInput = $("#name-input").val();
    console.log(eventInput);
    const newEvent = {
        name: eventInput,

    }
    eventDatabaseHandler.postEvent(newEvent)
        .then(() => {
            return eventDatabaseHandler.getMyEvents()
        })
        .then(eventArray => {
            Printer.printMyEvents(eventArray)
        })
})