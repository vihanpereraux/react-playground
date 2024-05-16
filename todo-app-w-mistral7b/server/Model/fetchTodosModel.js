require('dotenv').config({ path: './env' });

async function fetchTodos(db) {
    let recivedTodos = [];

    const collectionName = process.env.COLLECTION_NAME;
    const collection = db.collection(collectionName);

    try {
        recivedTodos = await collection.find({}).toArray();
        console.log("FetchTodos Model : All Docs - " + recivedTodos);
        return recivedTodos;
    } catch (error) {
        console.log("InsertTodos Model : Databse/Collection Error - " + error)
        return false;
    } finally {
        // await abortMongodbClient();
    }
}

module.exports = { fetchTodos };