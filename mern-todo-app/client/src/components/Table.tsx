import React, { useEffect, useState } from "react";
import axios from 'axios';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TodoTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3001/get-todos');
        // console.log(response.data);
        setData(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="left">Task</TableCell>
              <TableCell align="left">Author</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <>
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left">00{index + 1}</TableCell>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">{item.author + "pereraux"}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TodoTable;
