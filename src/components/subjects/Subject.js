import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Subject({subject, onDelete, onToggle, onImportant, onReminder, onChangeReminder}) {

  return (
    <div className = 'task'>
        <h3>
          {subject["subject"]}
          <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
        </h3>

        <p>
          Difficulty: {task["difficulty"]}
        </p>

        <p>
          Hours Per Week Required: {task["hoursPerWeek"]}
        </p>

    </div>
  )
}

export default Subject