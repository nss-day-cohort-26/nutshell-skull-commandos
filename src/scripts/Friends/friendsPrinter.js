const formBuilder = require("./friendFormBuilder")
const userDatabaseHandler = require("../users/databaseHandler")
const friendDatabaseHandler = require("./friendsDatabaseHandler")


const printer = Object.create({}, {
    printFriends: {
        value: function (friendArray) {
            console.log(friendArray)
            $("#friends-list").empty();
            friendArray.forEach((friend) => {
                const $friendDiv = $("<div>").attr("id", formBuilder.newFriend[0].id)
                $("<h4>").text(formBuilder.friendAdd.val()).appendTo($friendDiv);
                $("<button>").text("Delete").addClass(".delete-btn").appendTo($friendDiv);
                $($friendDiv).appendTo("#friends-list");
            })
        }
    }
})


module.exports = printer;