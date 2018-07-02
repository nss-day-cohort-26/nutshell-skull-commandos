const databaseHandler = require("./databaseHandler");

const Printer = require("./friendPrinter");



$("#form-container").on("click", "#submit-btn", () => {
    const nameInput = $("#name-input").val();
    console.log(nameInput);
    const newfriend = {
        name: nameInput,

    }
    databaseHandler.postFriend(newfriend)
        .then(() => {
            return DatabaseHandler.getAllTasks()
        })
        .then(friendArray => {
            Printer.printTodos(friendArray)
        })
})