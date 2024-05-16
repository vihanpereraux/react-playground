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

function TodoTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3001/get-todos');
        setData(response.data)
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchTodos();
  }, [])

  const deleteItem = async (id: string) => {
    try {
      const response = await axios.delete("http://localhost:3001/delete-todo?id=" + id)
      if (response) {
        location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
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
                <TableCell align="left"><button onClick={() => {deleteItem(item._id)}}><DeleteIcon /></button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TodoTable;
