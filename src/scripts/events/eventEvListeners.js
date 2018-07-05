const eventDatabaseHandler = require("./eventDatabaseHandler");
const eventsPrinter = require("./eventPrinter");
const userData = require("../users/usersEvents");

$("#eventForm-container").on("click", "#submit-btn", () => {
    const eventNameInput = $("#eventName-input").val();
    const eventDateInput = $("#eventDate-input").val();
    const eventLocationInput = $("#eventLocation-input").val();
    const newEvent = {
        name: eventNameInput,
        date: eventDateInput,
        location: eventLocationInput,
        userID: userData()
    }
    eventDatabaseHandler.postEvent(newEvent)
        .then((eventInfo) => {
            $("#eventName-input").val("").attr("placeholder", "Event")
            $("#eventDate-input").val("").attr("placeholder", "Event Date")
            $("#eventLocation-input").val("").attr("placeholder", "Event Location")
            console.log(eventInfo)
            return eventDatabaseHandler.getAllEvents()

        })
        .then(eventArray => {
            eventsPrinter.printEvents(eventArray)
        })
})
// delete button event listener
$("#event-container").on("click", ".delete-btn", () => {
    const eventID = $(event.target).parent().attr("id")
    eventDatabaseHandler.deleteEvent(eventID)
        .then(() => {
            return eventDatabaseHandler.getAllEvents()
        })
        .then((eventArray) => {
            eventsPrinter.printEvents(eventArray)
        })
})