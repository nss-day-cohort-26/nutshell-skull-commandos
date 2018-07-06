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

    deleteEvent: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "DELETE",
            })
        }
    },

    putEvent: {
        value: (name, date,location,id) => {
            return $.ajax({
                url: `http://localhost:3000/events/${id}`,
                method: "PUT",
                data: {
                    name: name,
                    date: date,
                    location: location
                }
            })
        }
    }
})
module.exports = eventDatabaseHandler;