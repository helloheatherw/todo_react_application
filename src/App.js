import React from "react";

import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import RemainingTasks from "./RemainingTasks/RemainingTasks";
import TaskItem from "./TaskItem/TaskItem";

import "./App.css";

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <AddTask /> 
      <RemainingTasks />
      <ul className="task-list">
        <TaskItem text="Paint and oil outdoor furniture" />
        <TaskItem text="Hang pictures in bedroom" />
        <TaskItem text="Order party decorations" />
        <TaskItem text="Order replacement printer toner" />
        <TaskItem text="Organise Metrolink refund" />
      </ul>
    </div>
  );
}

export default App;
