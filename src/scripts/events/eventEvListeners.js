const eventDatabaseHandler = require("./eventDatabaseHandler");
const eventsPrinter = require("./eventPrinter");
<<<<<<< HEAD
const userData = require("../users/usersEvents");

=======
// submit button event listener
>>>>>>> master
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
<<<<<<< HEAD
        .then((eventInfo) => {
            console.log("event Info", eventInfo)
            $("#eventName-input").val("").attr("placeholder","Event Name")
            $("#eventDate-input").val("").attr("placeholder","Date")
            $("#eventLocation-input").val("").attr("placeholder","Location")
=======
        .then(() => {
            $("#eventName-input").val("").attr("placeholder", "Event")
            $("#eventDate-input").val("").attr("placeholder", "Event Date")
            $("#eventLocation-input").val("").attr("placeholder", "Event Location")
>>>>>>> master
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