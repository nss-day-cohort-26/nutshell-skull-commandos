const userDatabaseHandler = require("../users/databaseHandler")
const friendDatabaseHandler = require("./friendsDatabaseHandler")

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
                userDatabaseHandler.getUserByName(name).then(newFriend => {
                    console.log(newFriend[0].id)
                    const newFriends = Object.create({}, {
                        User2ID: {
                            value: newFriend[0].id,
                            enumerable: true
                        },
                        User1ID: {
                            value: 1,
                            enumerable: true
                        }
                    })
                    friendDatabaseHandler.MakeNewFriend(newFriends)
                });
            })
        }
    }
})

module.exports = friendForm