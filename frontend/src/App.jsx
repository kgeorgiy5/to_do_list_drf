import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
import { Grid, Typography } from "@mui/material";


function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks-get/")
      .then((res) => setTasks(res.data));
  }, []);


  return (
    <>
    <Typography variant="h3" textAlign="center" sx={{mt:5}}>
      Tasks
    </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ minHeight: "100vh", mt: 5 }}
      >
        <Tasks tasks={tasks} setTasks={setTasks}/>
      </Grid>
    </>
  );
}

export default App;
