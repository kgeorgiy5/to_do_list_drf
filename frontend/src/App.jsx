import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Tasks from "./components/Tasks";
import Task from "./components/Task";
import { Grid } from "@mui/material";
function App() {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks-get/")
      .then((res) => {setTasks(res.data); console.log(res.data)});
  }, []);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ minHeight: "100vh", mt: 10 }}
      >
        <Tasks tasks={tasks} />
      </Grid>
    </>
  );
}

export default App;
