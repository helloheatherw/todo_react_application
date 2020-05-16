import React from 'react';

import completeIcon from '../icons/confirm.svg'
import deleteIcon from '../icons/close.svg'

import './TaskItem.css';

function TaskItem(props) {
  // function handleDeleteClick() {
  //   props.deleteTask(props.id);
  // }

  function handleCompleteClick() {
    // console.log('The complete button has been clicked!');
    // console.log(props.id);
    props.completeTask(props.id);
  }

  return (
    <li className={`task task--${ props.completed ? 'complete' : 'active'}`}>
      <span className="task__text">
        { props.text }
        <span className="task__date">{ props.dueDate }</span>
      </span>
      
      <div className="task__actions">
        { !props.completed &&
          <button 
            type="button" 
            className="task__action-button task__complete-button"
            onClick={ handleCompleteClick }>
          <img src={ completeIcon } alt="" className="complete-svg"/>
          <span className="button--text" aria-hidden="false">Complete</span>
        </button>}

        <button 
          type="button" 
          className="task__action-button task__delete-button" 
          onClick={ () => props.deleteTask(props.id) }>
          <img src={ deleteIcon } alt="" className="delete-svg"/>
          <span className="button--text" aria-hidden="false">Delete</span>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;