import React from 'react';

import TaskItem from "../TaskItem/TaskItem";

import './TaskList.css';

function TaskList() {
  return (
    <div className="tasks">
        <ul className="tasks--all-active">
            <TaskItem text="Paint and oil outdoor furniture" status="active"/>
            <TaskItem text="Hang pictures in bedroom" status="active"/>
            <TaskItem text="Order party decorations" status="active"/>
        </ul>
        <ul className="tasks--all-complete">
            <TaskItem text="Order replacement printer toner" status="complete"/>
            <TaskItem text="Organise Metrolink refund" status="complete"/>
        </ul>
  </div>
  );
}

export default TaskList;