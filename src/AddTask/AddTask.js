import React, { Fragment } from 'react';

import addIcon from "../icons/plus.svg"

import './AddTask.css';

function AddTask() {
  return (
      <Fragment>
        <form className="form-inline add-task">
            <label className="sr-only" htmlFor="taskInput">Add new task</label>
            <input type="text" className="form-control add-task__input-field add-task--text" id="taskInput" placeholder="Something I need to do..."/>
            <input type="date" className="form-control add-task__input-field add-task--date"/>
            <button type="submit" className="btn btn-primary add-task__add-button">Add</button>
        </form> 

        <button aria-label="add new task" className="add-task--floating-button">
            <img src={ addIcon } className="add-svg" alt=""/>
        </button>
      </Fragment>
     
  );
}

export default AddTask;