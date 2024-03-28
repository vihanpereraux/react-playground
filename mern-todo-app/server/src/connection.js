const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

async function connectDB() {
  const connectionString = 'mongodb://localhost:27017';
  try {
    const client = new mongoClient(connectionString,
      { useNewUrlParser: true, useUnifiedTopology: true });

    try {
      await client.connect();

      const db = client.db("todo_app");

      console.log('Connected to MongoDB');
      return db;
    } catch (err) {
      console.error('Error connecting to MongoDB', err);
      throw err;
    }
  } catch (error) {
    console.error(error);
    return "!passed";
  }
}

module.exports = { connectDB }