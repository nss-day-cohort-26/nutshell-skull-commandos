const eventForm = require("./eventBuilder")
const eventsPrinter = require("./eventPrinter");



eventForm.buildEventForm()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/events")
        .then((events) => {
            printer.printTodos(events);
        })
}

printOnPageLoad();