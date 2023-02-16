const mongoose = require("../mongoosedb");
const Schema = mongoose.Schema;

const todoSchema = Schema ({
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

/*
 todos => definição do nome da coleção (pode ser qualquer nome)
 Todo => objeto que da acesso ao banco de dados mongo na coleção todos
*/
module.exports = Todo = mongoose.model("todos", todoSchema) 