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
$("#eventForm-container").on("click", "#update-btn", () => {
    const eventNameInput = $("#eventName-input").val();
    const eventDateInput = $("#eventDate-input").val();
    const eventLocationInput = $("#eventLocation-input").val();
    const updateEvent = {
        id: updateEventID,
        name: eventNameInput,
        date: eventDateInput,
        location: eventLocationInput,
        userID: userData()
    }
    eventDatabaseHandler.putEvent(updateEvent)
        .then(() => {
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
let updateEventID;
// edit button event listener
$("#event-container").on("click", ".edit-btn", () => {
    updateEventID = $(event.target).parent().attr("id")
    console.log(updateEventID)
    eventDatabaseHandler.getEvent(updateEventID)
    .then((response) => {
        console.log(response)
        $("#eventName-input").val(response.name)
        $("#eventDate-input").val(response.date)
        $("#eventLocation-input").val(response.location)
    })
})