require('dotenv').config({ path: '../.env' });

async function insertTodos(db, todoObj) {
    const collectionName = process.env.COLLECTION_NAME;

    try {
        const collection = db.collection(collectionName);
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
    } catch (error) {
        console.log("InsertTodos Model : Databse/Collection Error - " + error)
        return false;
    } finally {
        // await abortMongodbClient();
    }
}

module.exports = { insertTodos };