const { connectDB } = require('./connectionModel');

async function insertTodos(todoObj) {
    const db = await connectDB();

    if (db) {
        const collection = db.collection('todos');
        collection.insertOne(todoObj, function (err, result) {
            if (!err) {
                console.log("InsertTodos Model : Result - " + result);
                return true;
            }
            else {
                console.log("InsertTodos Model : Error - " + err);
                return false;
            }
        });
    }
    else {
        console.log("InsertTodos Model : Databse Error !")
        return false;
    }
}

module.exports = { insertTodos };