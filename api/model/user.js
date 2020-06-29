const mongoose = require('mongoose')

const user  = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", user);