const { ObjectId } = require('mongodb');
require('dotenv').config({ path: '../.env' });

async function deleteTodo(db, id) {
    const collectionName = process.env.COLLECTION_NAME;

    try {
        const collection = db.collection(collectionName);

        const response = await collection.deleteOne({ _id: new ObjectId(id) });
        console.log(response);
        if (response.deletedCount === 1) {
            console.log("Record deleted successfully");
            return true;
        }
        else {
            console.log("No record found");
            return false;
        }
    } catch (error) {
        console.error("Error deleting records - " + error);
        return error;
    }
}

module.exports = { deleteTodo };