const express = require('express');
const cors = require('cors');
require('dotenv').config();

// models
const { insertTodos } = require('../Model/insertTodosModel');
const { fetchTodos } = require('../Model/fetchTodosModel');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log("Server is up and running locally on PORT - " + PORT);
});

// default end point
app.get('/', (req, res) => {
    res.sendFile(require('path').resolve(__dirname, '..') + "/public/index.html");
});

// post todo end point
app.post('/add-tasks', async (req, res) => {
    const task = req.body.task;
    if (task) {
        try {
            console.log("Universal Controller : Task recieved - " + task);
            const todoObj = {
                author: "vihan",
                name: task
            }
            // getting the connection string
            const { connectMongodbClient } = require('../Model/connectionModel')
            const db = await connectMongodbClient();

            const result = insertTodos(db, todoObj);
            if (result) {
                console.log("Universal Controller : Task entered - " + task);
            };
            return true;
            
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    else {
        console.log("Universal Controller : Task not recieved - " + task);
        return false;
    }

});

// fetch all todos
app.get('/get-todos', async (req, res) => {
    // 
    const { connectMongodbClient } = require('../Model/connectionModel')
    const db = await connectMongodbClient();

    const result = await fetchTodos(db);
    if (result) {
        res.send(result)
    }
});
