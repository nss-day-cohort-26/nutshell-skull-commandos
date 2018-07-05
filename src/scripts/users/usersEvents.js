const databaseHandler = require("./databaseHandler");

const Printer = require("./userPrinter");

let userID = "";

$("#form-container").on("click", "#submit-btn", () => {
    const nameInput = $("#name-input").val();
    console.log(nameInput);
    const newUser = {
        name: nameInput,

    }
    databaseHandler.postUser(newUser)
        .then((userInfo) => {
            userID = userInfo.id
            console.log(userInfo)
            return DatabaseHandler.getAllUsers(userInfo.id)
        })
        .then(userArray => {
            Printer.printUsers(userArray)
        })
})

let getUserID = () => {
    return userID
}

module.exports = getUserID;