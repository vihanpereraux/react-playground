import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './styles/Styles.css';

function Create() {
    const [task, setTask] = useState("");

    const addItem = () => {
        if (task.length === 0) {
            console.log('Found an empty entrty !');
        }
        else {
            axios.post('http://localhost:3001/add-tasks', { task: task })
                .then(result => { console.log(result) })
                .catch(err => { console.error(err) })
        }
    }

    return (
        <>
            <div className="form_wrapper">
                <TextField
                    sx={{
                        background: 'white',
                        width: '90%'
                    }}
                    id="filled-basic"
                    label="Enter the todo item"
                    variant="filled"
                    onChange={(e) => { setTask(e.target.value) }} />

                <Button
                    sx={{
                        ml: 1,
                        width: '10%',
                        textTransform: 'capitalize',
                        fontSize: 16
                    }}
                    variant="contained"
                    onClick={addItem}>
                    Add Item</Button>
            </div>
        </>
    )
}

export default Create