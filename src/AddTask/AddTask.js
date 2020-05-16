import React, { Fragment, useState } from 'react';

import addIcon from "../icons/plus.svg"

import './AddTask.css';

function AddTask(props) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleDateChange(event) {
    setDueDate(event.target.value);
  }

  function handleAddTaskClick() {
    props.addTask(text, dueDate);
  }

  return (
      <Fragment>
        <form className="form-inline add-task">
            <label className="sr-only" htmlFor="taskInput">Add new task</label>
            <input 
              type="text" 
              className="form-control add-task__input-field add-task--text" 
              id="taskInput"
              onChange={ handleTextChange }
              value={ text }/>
            <input 
              type="date" 
              className="form-control add-task__input-field add-task--date"
              onChange={ handleDateChange }
              value={ dueDate }/>
            <button 
              type="button" 
              className="btn btn-primary add-task__add-button"
              onClick={ handleAddTaskClick }
              >Add</button>
        </form> 

        <button aria-label="add new task" className="add-task--floating-button">
            <img src={ addIcon } className="add-svg" alt=""/>
        </button>
      </Fragment>
     
  );
}

export default AddTask;