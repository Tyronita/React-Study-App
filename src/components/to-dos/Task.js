import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete, onToggle, onImportant, onReminder, onChangeReminder}) {
  const importantAndReminder = () => {
    const importance = onImportant(task, task.id)
    const remind = onReminder(task, task.id)
    if(importance === 'task_important' && remind === 'task_reminder'){
      return('task_reminder_and_important')
    }
    else if(importance !== 'task_important' && remind === 'task_reminder'){
      return('task_reminder')
    }
    else if(importance === 'task_important' && remind !== 'task_reminder'){
      return('task_important')
    }
    return('task')
  }

  const timeDifference = Math.floor((new Date() - task["datetime"]) / 1000);

  return (
    <div className = {importantAndReminder()}
      onDoubleClick={() => onToggle(task, task.id)}
      onClick = {() => onChangeReminder(task, task.id)}
    >
        <h3>
          {task["task"]}
          <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} />
        </h3>

        <p>
          {task["description"]}
        </p>

        <p>
          Due: {new Date(task["datetime"]).toString()}
        </p>

    </div>
  )
}

export default Task