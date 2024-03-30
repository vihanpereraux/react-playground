const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const { connectDB } = require('../Model/connectionModel');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log("Server is up and running locally on PORT - " + PORT);
});

// default end point
app.get("/", (req, res) => {
    res.sendFile(require('path').resolve(__dirname, '..') + "/public/index.html");
});

// post todo end point
app.post('/add-tasks', async (req, res) => {
    const task = req.body.task;
    
    console.log("Recieved task is : " + task);
    
    const db = await connectDB();

    if (db) {
        const todoObj = {
            author: "vihan",
            name: task
        }
        const collection = db.collection('todos');
        collection.insertOne(todoObj, (err, result) => {
            if(err) throw err;
            console.log(result);            
        })
        console.log(task + " : " + "sent to the db !");
    }
    else { 
        console.log("Task not sent due to a db failure !");
    }
});
