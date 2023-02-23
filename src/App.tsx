import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('') ;

  const addTask = (e: any) => {
    e.preventDefault();
    if (newTask.trim() === '') {
      alert("Task field can't be empty.");
      return;
    }
    
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  const deleteTask = (taskName: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskName));
  }


  return (
    <div id = "container">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input type = "text" placeholder = "Add a task" id = "add-task-input" value = {newTask} 
        onChange = {(e) => setNewTask(e.target.value)}
        ></input>
        <button type = "submit" id = "add-task-button">add</button>
      </form>
      <ul id = "task-container">
  {tasks.map((task, index) => (
    <li key = {index}>
      <input type = "checkbox" id={`task-${index}`} />
      <label htmlFor = {`task-${index}`}>{task}</label>
      <button onClick = {() => deleteTask(task)}>Delete</button>
    </li>
  ))}
</ul>
    </div>
)}
export default App


