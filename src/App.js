import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import RemainingTasks from "./RemainingTasks/RemainingTasks";
import TaskItem from "./TaskItem/TaskItem";

import "./App.css";

function App() {
  const [ tasks, setTasks ] = useState([
    { text: "Paint and oil outdoor furniture", completed: false, dueDate: "2020-06-01", id: uuidv4() },
    { text: "Hang pictures in bedroom", completed: false, dueDate: "2020-07-01", id: uuidv4() },
    { text: "Order party decorations", completed: true, dueDate: "2020-05-01", id: uuidv4() },
    { text: "Order replacement printer toner", completed: true, dueDate: "2020-05-01", id: uuidv4() },
    { text: "Organise Metrolink refund", completed: true, dueDate: "2020-05-10", id: uuidv4() }
  ]);

  const activeTasks = tasks.filter(task => !task.completed);

  const completedTasks = tasks.filter(task => task.completed);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = true;
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function addTask(text, dueDate) {
    const newTask = { 
      text: text, 
      completed: false, 
      dueDate: dueDate, 
      id: uuidv4() 
    }

    const updatedTasks = [ ...tasks, newTask ]

    setTasks(updatedTasks);
  }

  return (
    <div className="App" id="app">
      <Header />
      <AddTask addTask={ addTask }/> 
      <RemainingTasks count={ activeTasks.length }/>
      <ul className="task-list">
        { activeTasks.map(task => {
          return <TaskItem 
            completeTask={ completeTask }
            deleteTask={ deleteTask } 
            id={ task.id } 
            key={ task.id } 
            text={ task.text } 
            completed={ task.completed } 
            dueDate={ task.dueDate }/>
        })}
      </ul>

      <ul className="task-list">
      { completedTasks.map(task => { 
        return <TaskItem 
          completeTask={ completeTask }
          deleteTask={ deleteTask } 
          id={ task.id } 
          key={ task.id } 
          text={ task.text } 
          completed={ task.completed } 
          dueDate={ task.dueDate }/>
      })}
      </ul>
    </div>
  );
}

export default App;
