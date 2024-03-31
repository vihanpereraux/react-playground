const mongoClient = require("mongodb").MongoClient;
require("dotenv").config({ path: "../.env" });

const connectionString = process.env.CONNECTION_STRING;
const dbName = process.env.DB_NAME;
const client = new mongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectMongodbClient() {
  try {
    // console.log
    await client.connect();
    const db = client.db(dbName);
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    throw error;
  }
}

async function abortMongodbClient() {
  // await client.close();
}

module.exports = { connectMongodbClient, abortMongodbClient };
