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
            console.log("event Info", eventInfo)
            $("#eventName-input").val("").attr("placeholder","Event Name")
            $("#eventDate-input").val("").attr("placeholder","Date")
            $("#eventLocation-input").val("").attr("placeholder","Location")
            return eventDatabaseHandler.getAllEvents()
        })
        .then(eventArray => {
            eventsPrinter.printEvents(eventArray)
        })
})