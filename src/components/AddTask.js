import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [important, setImportant] = useState(false)
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)
  const [disabler, setDisabler] = useState(true)

  const onSubmit = (e) =>{
    e.preventDefault()

    if(!title){
      alert('Please enter the name of the task')
      return
    }

    onAdd({title, text, important, date, reminder, disabler})

    setTitle('')
    setText('')
    setImportant('')
    setDate('')
    setReminder('')
    setDisabler('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Description</label>
            <input type='text' placeholder='Description'value={text} onChange={(e) => setText(e.target.value)}/>
            <label>Date/Time</label>
            <input type='text' placeholder='Add Date/Time'value={date} onChange={(e) => {setDate(e.target.value); e.target.value !== '' ? setDisabler(false) : setDisabler(true)}}/>
            <label>Reminder</label>
            <input type='checkbox' value={reminder} checked={reminder} disabled={disabler} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            <label>Important</label>
            <input type='checkbox' value={important} checked={important} onChange={(e) => setImportant(e.currentTarget.checked)}/>
            
            <input type='submit' value='Save Task' className = 'TodoBtn TodoBtn-block'/>
        </div>
    </form>
  )
}

export default AddTask
