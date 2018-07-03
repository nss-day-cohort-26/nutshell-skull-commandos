const databaseHandler = require("./databaseHandler");

const Printer = require("./userPrinter");



$("#form-container").on("click", "#submit-btn", () => {
    const nameInput = $("#name-input").val();
    console.log(nameInput);
    const newUser = {
        name: nameInput,

    }
    databaseHandler.postUser(newUser)
        .then(() => {
            return DatabaseHandler.getAllTasks()
        })
        .then(userArray => {
            Printer.printTodos(userArray)
        })
})