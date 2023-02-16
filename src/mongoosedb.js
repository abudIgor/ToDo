const mongoose = require('mongoose');

const user = "admin";
const pass = "mudar123";
const database = "todo_sample";
const serverName = "cluster0.r8vwphk.mongodb.net";

module.exports = {
    init: () => {
        mongoose.connect(
            `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                // userUnifiedTopology: true, -> não é mais suportado
                // useFindAndModify: false, -> não é mais suportado
                // useCreateIndex: true, -> não é mais suportado
            }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    }
}