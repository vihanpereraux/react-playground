const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is up and running locally");
});

// default end point
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/add-tasks', (req, res) => {
    const task = req.body.task;
    console.log("Recived task is : " + task );
});
