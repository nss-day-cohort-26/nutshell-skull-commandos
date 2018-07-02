const databaseHandler = Object.create({}, {
    postFriend: {
        value: (newFriendObject) => {
            return $.ajax({
                url: "http://localhost:3000/friends",
                method: "POST",
                data: newFriendObject
            })
        }
    },
    deleteFriend: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/friends/${id}`,
                method: "DELETE",
            })
        }
    }
})
module.exports = databaseHandler;