import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle, onImportant, onReminder, onChangeReminder}) => {
    
    return (
      <div>
          {tasks.map((task) => (
          <div>
              <Task key={task.id} task={task} onDelete={onDelete} onToggle = {onToggle} onImportant = {onImportant} onReminder={onReminder} onChangeReminder={onChangeReminder}/>
          </div>
          ))}
      </div>
    )
  }
  
  export default Tasks