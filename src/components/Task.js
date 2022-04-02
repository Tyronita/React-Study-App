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
  return (
    <div className = {importantAndReminder()} onDoubleClick={() => onToggle(task, task.id)} onClick = {() => onChangeReminder(task, task.id)} >
        <h3>{task.title} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} /></h3>
        <p>{task.text}</p>
        <p>{task.date}</p>

    </div>
  )
}

export default Task