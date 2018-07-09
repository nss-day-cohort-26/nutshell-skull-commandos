const userDatabaseHandler = require("../users/databaseHandler")

const friendForm = Object.create({}, {
    buildForm: {
        value: () => {
            const $friendDiv = $("<div>").attr("id", "friend-form");
            let friendAdd = $("<input>").attr("id", "friend-add").attr("placeholder", "Search for Friends")
            friendAdd.appendTo($friendDiv);
            $("<button>").attr("id", "addFriend-btn").text("Add Friend").appendTo($friendDiv);
            $friendDiv.appendTo($("#friend-container"))
            $("#addFriend-btn").click(function () {
                const name = friendAdd.val()
                console.log(friendAdd.val())
                userDatabaseHandler.getUserByName(name).then(getUsers => {
                    console.log(getUsers.id)
                });
            })
        }
    }
})

module.exports = friendForm