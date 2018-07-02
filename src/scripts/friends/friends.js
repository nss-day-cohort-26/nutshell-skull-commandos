const formBuilder = require("./friendBuilder")
const printer = require("./friendPrinter");



formBuilder.buildForm()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/friends")
        .then((friends) => {
            printer.printTodos(friends);
        })
}

printOnPageLoad();