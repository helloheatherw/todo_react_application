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
        <TaskItem text="Paint and oil outdoor furniture" completed={ false } dueDate="2020-06-01" />
        <TaskItem text="Hang pictures in bedroom" completed={ false } dueDate="2020-07-01" />
        <TaskItem text="Order party decorations" completed = { true } dueDate="2020-05-01"/>
        <TaskItem text="Order replacement printer toner" completed={ true } dueDate="2020-05-01"/>
        <TaskItem text="Organise Metrolink refund" completed={ true } dueDate="2020-05-01"/>
      </ul>
    </div>
  );
}

export default App;
