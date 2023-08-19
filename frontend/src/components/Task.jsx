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
export default function Task({ task, expanded, handleChange }){
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
          <Typography sx={{ color: 'text.secondary' }}>Created at {formatDateTime(task.time_created)}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Stack direction="row" justifyContent="space-between">{task.description}
            <Stack direction="row">
                <IconButton><EditIcon/></IconButton>
                <IconButton><DeleteIcon/></IconButton>
            </Stack>
            </Stack>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    )
}