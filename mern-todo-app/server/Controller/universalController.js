const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
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
        console.log("Universal Controller : Task recieved - " + task);
        const todoObj = {
            author: "vihan",
            name: task
        }
        const result = insertTodos(todoObj);
        if (result) { return true; }
        else { return false; }
    }
    else {
        console.log("Universal Controller : Task not recieved - " + task);
        return false;
    }

});

// fetch all todos
app.get('/get-todos', async (req, res) => {
    const result = await fetchTodos();
    if (result) {
        res.send(result)
    }
});
