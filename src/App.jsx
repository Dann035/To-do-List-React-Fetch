import "./App.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input , setInput] = useState("");

  const addTask = () => {
    if(input.trim()){
      setTasks([...tasks, {
        id: Math.random(),
        text: input,
        done: false
      }])
      setInput("")
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }


  return (
    <>
      <h1>To-Do-List</h1>
      <input 
      type="text" 
      className="btn-Add"
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      placeholder="Nueva Tarea ..."
      />
      <button className="btn-Add" onClick={addTask}>➕</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} >
            <span>
              {task.text}
            </span>
            <button className="btn-Delete" onClick={()=> deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App; 
