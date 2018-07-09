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
            $("#name-input").val("").attr("placeholder", "User Name")
            console.log(userInfo)
            return databaseHandler.getAllUsers(userInfo.id)
        })
        .then(userArray => {
            Printer.printUsers(userArray)
        })
})


$("#container").on("click", ".delete-btn", () => {
    const userID = $(event.target).parent().attr("id")
    databaseHandler.deleteTask(userID)
        .then(() => {
            return databaseHandler.getAllUsers()
        })
        .then((userArray) => {
            userPrinter.printTasks(userArray)
        })
})

let getUserID = () => {
    const ids =  sessionStorage.getItem("currentUserId")
    return ids;
}

$("#form-container").on("click", "#signIn-btn", () => {
    const logInInput = $("#logIn-input").val()
    console.log(logInInput);
    databaseHandler.getUserByName(logInInput)
    .then(response => {
        console.log(response)
    if(!response[0]) {
        console.log("Must Sign Up!")
    }
        sessionStorage.setItem("currentUserId", `${response[0].id}`)
    })
})

module.exports = getUserID;