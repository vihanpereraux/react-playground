const express = require('express');
const cors = require('cors');
const { connectDB } = require('./connection');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
app.listen(PORT, async () => {
    console.log("Server is up and running locally");
});

// default end point
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

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
