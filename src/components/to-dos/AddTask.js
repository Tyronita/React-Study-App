import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

  // hooks for form inputs
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [important, setImportant] = useState(false)
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)
  const [disabler, setDisabler] = useState(true)

  // form handler
  const onSubmit = (e) =>{
    e.preventDefault()

    if(!task){
      alert('Please enter the name of the task')
      return
    }

    onAdd({task, description, important, date, reminder, disabler})

    // clear outputs
    setTask('')
    setDescription('')
    setImportant('')
    setDate('')
    setReminder('')
    setDisabler('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>

            <label>Task Name</label>
            <input type='text' placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)}/>
            
            <label>Description</label>
            <input type='text' placeholder='Description'value={description} onChange={(e) => setDescription(e.target.value)}/>
            
            <label>Date/Time</label>
            <input type='datetime-local' value={date} onChange={(e) => {setDate(e.target.value); e.target.value !== '' ? setDisabler(false) : setDisabler(true)}}/>
            
            <div> 
              <label>Reminder</label>
              <input type='checkbox' value={reminder} checked={reminder} disabled={disabler} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <div> 
              <label>Important</label>
              <input type='checkbox' value={important} checked={important} onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            
            <input type='submit' value='Save To-do' className = 'TodoBtn TodoBtn-block'/>
        </div>
    </form>
  )
}

export default AddTask
