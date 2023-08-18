import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetch('http://localhost:8000/api/tasks-get')
      .then(res => res.json())
      .then(data => {
        setTasks(data);
      })
      .catch(err => console.log(err));
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
