const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

async function connectDB() {
  const connectionString = 'mongodb://localhost:27017';
  const dbName = 'todo_app'
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