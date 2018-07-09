const friendDatabaseHandler = Object.create({}, {
    MakeNewFriend: {
        value: (newFriend) => {
            return $.ajax({
                url: "http://localhost:3000/friends",
                method: "POST",
                data: newFriend
            })
        }
    }})
    module.exports = friendDatabaseHandler;