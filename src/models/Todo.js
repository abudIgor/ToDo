const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema =  new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    finished: {
        type: Boolean,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Todo = mongoose.model('todos',todoSchema);


