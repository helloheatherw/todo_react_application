import React from "react";

import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import RemainingTasks from "./RemainingTasks/RemainingTasks";
import TaskList from "./TaskList/TaskList";

import "./App.css";

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <AddTask /> 
      <RemainingTasks />
      <TaskList />
    </div>
  );
}

export default App;
