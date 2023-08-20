import React from 'react'; 
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import formatDateTime from '../functions/formatDateTime';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Stack, IconButton, Tooltip } from '@mui/material';
import axios from 'axios';
import DoneIcon from "@mui/icons-material/Done";

export default function Task({ task, expanded, handleChange, setTasks, setOpenEditTask, setEditTask }){


    const deleteTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id))
      axios.delete(`http://localhost:8000/api/tasks-delete/${id}/`)
      .catch(err => console.log(err))
    }
 
    return (
        <Accordion  sx={{width: "40vw" ,  bgcolor:task.is_complete ? "#FFD699" : "inherit"}} expanded={expanded === `task${task.id}`} onChange={handleChange(`task${task.id}`)}>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant='h6' fontWeight="400" sx={{ width: '33%', flexShrink: 0 }}>
            {task.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{task.edited ? 'Edited at' : 'Created at'} {formatDateTime(task.time_edited)}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="span">
            <Stack direction="row" justifyContent={`${task.description ? "space-between": "flex-end"}`}>
              {task.description}
              <Stack direction="row" sx={{alignSelf:"flex-end"}}>
                <Tooltip title="Mark task complete">
                  <IconButton onClick={() => {setTasks(tasks => tasks.map(t => t === task ? t = {...t, is_complete: true} : t))}}><DoneIcon/></IconButton>
                </Tooltip>
                <Tooltip title="Edit task">
                  <IconButton onClick={() => {setOpenEditTask(true); setEditTask(task)}}><EditIcon/></IconButton>
                </Tooltip>
                <Tooltip title="Delete task">
                  <IconButton onClick={() => deleteTask(task.id)}><DeleteIcon/></IconButton>
                </Tooltip>
              </Stack>
            </Stack>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    )
}