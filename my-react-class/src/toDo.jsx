
import { useState } from "react";
import "./toDo.css"
function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function handleAddTask() {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function moveTaskUp(index) {
        if (index === 0) return;
        const newTasks = [...tasks];
        [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
        setTasks(newTasks);
    }
    function moveTaskDown(index) {
        if (index === tasks.length - 1) return;
        const newTasks = [...tasks];
        [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
        setTasks(newTasks);
    }
    function clearAllTasks() {
        setTasks([]);
    }

    return (
        <div className="todo-container">
            <h1 className="todo-title">To Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={handleInputChange}
                placeholder="Add a new task..."
                className="task-input"
            />
            <button onClick={handleAddTask} className="add-button">
                Add Task
            </button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleRemoveTask(index)} className="remove-button">
                            Remove
                        </button>
                        <button onClick={() => moveTaskUp(index)} className="move-button">
                            Move Up
                        </button>
                        <button onClick={() => moveTaskDown(index)} className="move-button">
                            Move Down
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={clearAllTasks} className="clear-button">
                Clear All Tasks
            </button>
        </div>
    );
}

export default ToDo;