import ListaTareas from "./ListaTareas";
import { useState } from "react";

function FormInput() {

    const [input , setInput] = useState("");
  
    const addTask = () => {
      if(input.trim()){
        ListaTareas.setTasks([...ListaTareas.tasks, {
          id: Math.random(),
          text: input,
          done: false
        }])
        setInput("")
      }
    }

  return (
    <div>
      <input
        type="text"
        className="btn-Add"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva Tarea ..."
      />
      <button className="btn-Add" onClick={addTask}>
        ➕
      </button>
    </div>
  );
}

export default FormInput;
