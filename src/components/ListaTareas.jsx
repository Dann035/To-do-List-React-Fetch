import { useState } from "react";

function ListaTareas() {
	const [tasks, setTasks] = useState([]);

	const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
	
	return (
			<ul>
				{tasks.map(task => (
					<li key={task.id}>
						<span onClick={() => toggleTask(task.id)}>{task.text}</span>
					<button className="btn-Delete" onClick={() => deleteTask(task.id)}>❌</button>
					</li>
				))}
			</ul>
	)
}

export default ListaTareas;
