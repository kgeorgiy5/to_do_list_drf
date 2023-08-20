import React from 'react'; 
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import formatDateTime from '../functions/formatDateTime';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Stack, IconButton } from '@mui/material';
import axios from 'axios';


export default function Task({ task, expanded, handleChange, setTasks, setOpenEditTask, setEditTask }){

    const deleteTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id))
      axios.delete(`http://localhost:8000/api/tasks-delete/${id}/`)
      .catch(err => console.log(err))
    }
 
    return (
        <Accordion sx={{bgcolor:"inherit", boxShadow:"none"}} expanded={expanded === `task${task.id}`} onChange={handleChange(`task${task.id}`)}>
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
            <Stack direction="row" justifyContent="space-between">{task.description}
              <Stack direction="row">
                <IconButton onClick={() => {setOpenEditTask(true); setEditTask(task)}}><EditIcon/></IconButton>
                <IconButton onClick={() => deleteTask(task.id)}><DeleteIcon/></IconButton>
              </Stack>
            </Stack>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    )
}