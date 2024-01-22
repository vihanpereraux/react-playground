import React from "react";
import {TextField, Button} from '@mui/material';
import './styles/Styles.css';

function Create(){
    return(
        <>
            <div className="form_wrapper">
                <TextField 
                    sx={{ 
                        // background: 'red',
                        width: '90%'
                    }}
                    id="filled-basic" 
                    label="Enter the todo item" 
                    variant="filled" />

                <Button 
                    sx={{ 
                        ml: 1,
                        width: '10%',
                        textTransform: 'capitalize',
                        fontSize: 16
                    }}
                    variant="contained">
                        Add Item</Button>
            </div>
        </>
    )
}

export default Create