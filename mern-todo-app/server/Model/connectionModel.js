const mongoClient = require('mongodb').MongoClient;
require('dotenv').config({path: '../.env'});

async function connectDB() {
  const connectionString = 'mongodb://localhost:27017';
  const dbName = process.env.DB_NAME;
  try {
    const client = new mongoClient(connectionString,
      { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();

    const db = client.db(dbName);

    console.log('Connected to MongoDB');
    return db;

  } catch (error) {
    throw error;
  }
}

module.exports = { connectDB }