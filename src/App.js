import React, { useState } from "react";

import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import RemainingTasks from "./RemainingTasks/RemainingTasks";
import TaskItem from "./TaskItem/TaskItem";

import "./App.css";

function App() {
  const [ tasks, setTasks ] = useState([
    { text: "Paint and oil outdoor furniture", completed: false, dueDate: "2020-06-01", id: '001' },
    { text: "Hang pictures in bedroom", completed: false, dueDate: "2020-07-01", id: '002' },
    { text: "Order party decorations", completed: true, dueDate: "2020-05-01", id: '003' },
    { text: "Order replacement printer toner", completed: true, dueDate: "2020-05-01", id: '004' },
    { text: "Organise Metrolink refund", completed: true, dueDate: "2020-05-10", id: '005' }
  ]);

  const activeTasks = tasks.filter(task => !task.completed);

  const completedTasks = tasks.filter(task => task.completed )

  return (
    <div className="App" id="app">
      <Header />
      <AddTask /> 
      <RemainingTasks count={ activeTasks.length }/>
      <ul className="task-list">
        { activeTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={ task.completed } dueDate={ task.dueDate }/>)}
      </ul>

      <ul className="task-list">
      { completedTasks.map(task => <TaskItem key={ task.text } text={ task.text } completed={ task.completed } dueDate={ task.dueDate }/>)}
      </ul>
    </div>
  );
}

export default App;
