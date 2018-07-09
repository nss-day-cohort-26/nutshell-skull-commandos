const eventDatabaseHandler = Object.create({}, {
    postEvent: {
        value: (newEventObject) => {
            return $.ajax({
                url: "http://localhost:3000/events",
                method: "POST",
                data: newEventObject
            })
        }
    },

    getAllEvents: {
        value: () => {
            return $.ajax("http://localhost:3000/events")
        }
    },

    getEvent: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "GET",
        })
    }},

    deleteEvent: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "DELETE",
            })
        }
    },

    putEvent: {
        value: (updateEvent) => {
            console.log("update event", updateEvent)
            return $.ajax({
                url: `http://localhost:3000/events/${updateEvent.id}`,
                method: "PUT",
                data: {
                    name: updateEvent.name,
                    date: updateEvent.date,
                    location: updateEvent.location,
                    userID: updateEvent.userID
                }
            })
        }
    }
})
module.exports = eventDatabaseHandler;