const userData = require("./friendsEvents");
const friendData = require("./friendsDatabaseHandler")
const friends = require("./friendFormBuilder");

friends.buildForm()

const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/friends")
        .then((friends) => {
            printer.printFriends(friends);
        })
}

printOnPageLoad();