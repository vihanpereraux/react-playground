import React, { useEffect, useState } from "react";
import axios from 'axios';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Modal, Box, Typography } from "@mui/material";

function TodoTable() {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [objId, setObjId] = React.useState("");

  // initial fetch
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3001/get-todos');
        setData(response.data);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchTodos();
  }, [])

  // detele a todo in db
  const deleteItem = async () => {
    try {
      const response = await axios.delete("http://localhost:3001/delete-todo?id=" + objId)
      if (response) {
        location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  // modal functions
  const handleOpen = (id: string) => {
    console.log("modal opened");
    setObjId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
  };

  // modal stylings
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: 16 }} id="modal-modal-title">
            Do you want to delete the item ?
          </Typography>
          <Box id="action-btns-wrapper" sx={{ mt: 2 }}>
            <Button className="action-button" onClick={deleteItem}>yes</Button>
            <Button className="action-button" onClick={handleClose}>No</Button>
          </Box>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="left">Task</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="left">00{index + 1}</TableCell>
                <TableCell align="left">{item.name}</TableCell>
                <TableCell align="left">{item.author + ""}</TableCell>
                <TableCell align="left"><button onClick={() => { handleOpen(item._id) }}><DeleteIcon /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TodoTable;
