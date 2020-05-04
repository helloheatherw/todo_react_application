import React, { Fragment } from 'react';

import addIcon from "../icons/plus.svg"

import './AddTask.css';

function AddTask() {
  return (
      <Fragment>
        <form className="form-inline add-task">
            <label className="sr-only" htmlFor="taskInput">Task</label>
            <input type="text" className="form-control add-task__input-field" id="taskInput" placeholder="Something I need to do..."/>
            <button type="submit" className="btn btn-primary add-task__add-button">Add</button>
        </form> 

        <button aria-label="add task" className="add-task--floating-button">
            <img src={ addIcon } className="add-svg" alt=""/>
        </button>
      </Fragment>
     
  );
}

export default AddTask;