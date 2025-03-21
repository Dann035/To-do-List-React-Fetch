import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const getToDos = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/todo/users/dan"
    );
    console.log(response);
    if (!response.ok) {
      createDanUser();
      return;
    }
    const data = await response.json();
    setTasks(data.todos);
  };

  const createDanUser = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/todo/users/dan",
      {
        method: "POST",
      }
    );
    const data = await response.json();
  };
  const deleteTask = async (id) => {
    await fetch(
      "https://playground.4geeks.com/todo/todos/" + id,
      {
        method: "DELETE",
        headers: {
          'Contact-Type': 'application/json; charset=UTF-8'
        }
      }
    );
    setTasks(tasks.filter(task => task.id !== id))
  };
  const addTask = async () => {
    if (input.trim()) {
      const response = await fetch(
        "https://playground.4geeks.com/todo/todos/dan",
        {
          method: "POST",
          body: JSON.stringify({
            label: input,
            is_done: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data) {
        getToDos();
        setInput("");
      }
    }
  };
  async function doneTask() {}
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      <div className="CardLista3">
        <div className="CardLista2">
          <div className="CardLista">
            <h1>To-Do-List</h1>
            <input
              type="text"
              className="btn-Add"
              value={input}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nueva Tarea ..."
            />
            <button className="btn-Add" onClick={addTask}>
              ➕
            </button>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <input type="checkbox" id={task.id} onClick={doneTask} />
                  <span>{task.label}</span>
                  <button className="btn-Delete" onClick={() => deleteTask(task.id)}>
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
