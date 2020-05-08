import React from 'react';

import completeIcon from '../icons/confirm.svg'
import deleteIcon from '../icons/close.svg'

import './TaskItem.css';

function TaskItem(props) {
  return (
    <li className="task">
      <span className="task__text">{ props.text }</span>
      <div className="task__actions">
        <button type="button" className="task__action-button task__complete-button">
          <img src={ completeIcon } alt="" className="complete-svg"/>
          <span className="button--text" aria-hidden="false">Complete</span>
        </button>

        <button type="button" className="task__action-button task__delete-button">
          <img src={ deleteIcon } alt="" className="delete-svg"/>
          <span className="button--text" aria-hidden="false">Delete</span>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;