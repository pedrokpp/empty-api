const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    hwid: {
        type: String,
        required: true
    },
    winuser: {
        type: String,
        required: true
    },
    process: {
        type: Boolean,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: new Date().toLocaleTimeString('pt-br')
    },
    message: {
        type: String,
        required: true,
        default: "HWID encontrada"
    }
})

module.exports = mongoose.model('user', userSchema)