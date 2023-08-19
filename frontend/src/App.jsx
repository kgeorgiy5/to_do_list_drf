import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Tasks from "./components/Tasks";
import { Grid, Typography, Fab, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask"

function App() {

  const [tasks, setTasks] = useState([]);

  const [editTask, setEditTask] = useState({})

  const [openCreateTask, setOpenCreateTask] = useState(false);
  const handleOpen = () => setOpenCreateTask(true);

  const [openEditTask, setOpenEditTask] = useState(false)


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks-get/")
      .then((res) => setTasks(res.data));
  }, []);


  return (
    <>
    <EditTask task={editTask} open={openEditTask} setOpen={setOpenEditTask}/>
    <CreateTask open={openCreateTask} setOpen={setOpenCreateTask}/>
    <Stack direction="column">
      <Typography variant="h3" textAlign="center" sx={{mt:5}}>
        Tasks
      </Typography>
      <Fab onClick={handleOpen} sx={{width:"10%", alignSelf:"center", mt: 5, color:"black", bgcolor:"#b3c6ff", ":hover":{
        bgcolor:"#b3c6ff"
      }}} color="primary" aria-label="add" variant="extended">
          <AddIcon />
          Add task
        </Fab>
        </Stack>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ minHeight: "100vh", mt: 5 }}
      >
        <Tasks setEditTask={setEditTask} setOpenEditTask={setOpenEditTask} tasks={tasks} setTasks={setTasks}/>
      </Grid>
      
    </>
  );
}

export default App;
