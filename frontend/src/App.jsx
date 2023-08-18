import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks-get/')
    .then(res => setTasks(res.data))
  }, []);

  return (
    <>
      <h1>Array of Objects</h1>
      <ul>
        {tasks.map((obj, index) => (
          <li key={index}>
            {obj.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
