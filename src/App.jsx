import { useState , useEffect } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input , setInput] = useState("");

  const getToDos = async () => {
    const response = await fetch('https://playground.4geeks.com/todo/users/dan');
    console.log(response)
    if(!response.ok){
      createDanUser();
      return;
    }
    const data = await response.json()
    console.log(data)
    setTasks(data.todos)
  }

  const createDanUser = async () => {
    const response = await fetch('https://playground.4geeks.com/todo/users/dan', {
      method: 'POST'
    });
    const data = await response.json()
    console.log(data)
  }

  const addTask = async () => {
    if(input.trim()){
      const response = await fetch('https://playground.4geeks.com/todo/todos/dan',{
        method: 'POST',
        body: JSON.stringify({
          'label': input,
          'is_done': false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      if(data){
        getToDos();
        setInput("");
      }
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      addTask()
    }
  }

  useEffect(() => {
    getToDos()
  },[])

  return (
    <>
      <h1>To-Do-List</h1>
      <input 
      type="text" 
      className="btn-Add"
      value={input} 
      onKeyDown={handleKeyDown}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Nueva Tarea ..."
      />
      <button className="btn-Add" onClick={addTask}>➕</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} >
            <span>
              {task.label}{task.id}
            </span>
            <button className="btn-Delete" onClick={()=> deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App; 
