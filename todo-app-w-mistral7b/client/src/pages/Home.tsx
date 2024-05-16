import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";

// components
import Create from "../components/Create";
import NavBar from "../components/Nav";
import TodoTable from "../components/Table";

function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Container
        sx={{ textAlign: "center", background: "none", color: "white" }}
      >
        <NavBar />
      </Container>
      <Container
        fixed
        sx={{ textAlign: "center", background: "none", pt: 3, pb: 3 }}
      >
        {/* heading */}
        <Typography sx={{ color: "white", fontSize: 25 }}>
          Dummy Dev Test List
        </Typography>

        {/* form comp */}
        <Box sx={{ mt: 10, mb: 2 }}>
          <Create />
        </Box>

        {/* rending the fetched list */}
        <Box sx={{ mt: 5 }}>
          {todos.length != 0 ? (
            <Typography sx={{ color: "white", fontSize: 18 }}>
              No items found
            </Typography>
          ) : (
            // todos.map((todo) => <div key={todo}>{todo}</div>)

            // table componnets appears here
            <TodoTable></TodoTable>
          )}
        </Box>

        <Box sx={{ mt: 5 }}></Box>
      </Container>
    </>
  );
}

export default Home;
