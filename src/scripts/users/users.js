const formBuilder = require("./userBuilder")
const printer = require("./userPrinter");



formBuilder.buildForm()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/users")
        .then((users) => {
            printer.printTodos(users);
        })
}

printOnPageLoad();