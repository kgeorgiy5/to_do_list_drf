import React from 'react'; 
import Task from './Task';
import { Stack } from '@mui/material';
import { useState } from 'react';
export default function Tasks({ tasks }) {
const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Stack>
      {tasks.map(task => <Task key={task.id} task={task} expanded={expanded} handleChange={handleChange}/>)}
    </Stack>
  );
}