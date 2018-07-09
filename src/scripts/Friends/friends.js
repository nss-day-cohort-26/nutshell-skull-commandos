const userData = require("../users/usersEvents");
const friends = require("./friendFormBuilder");

friends.buildForm()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/users")
        .then((users) => {
            printer.printUsers(users);
        })
}

printOnPageLoad();