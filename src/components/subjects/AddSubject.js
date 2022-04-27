import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

  // hooks for form inputs
  const [subject, setSubject] = useState('')
  const [difficulty, setDifficulty] = useState(null) // 1 - 10
  const [hoursPerWeek, setHoursPerWeek] = useState(null) // > 0
  const [disabler, setDisabler] = useState(true)

  // form handler
  const onSubmit = (e) =>{
    e.preventDefault()

    if(!subject){
      alert('Please enter the name of the subject')
      return
    }

    onAdd({subject, difficulty, hoursPerWeek, disabler})

    // clear outputs
    setSubject('')
    setDifficulty(null)
    setHoursPerWeek(null)
    setDisabler('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>

            <label>Subject Name</label>
            <input type='text' placeholder='Subject Name' value={subject} onChange={(e) => setSubject(e.target.value)}/>

            <label>Difficulty</label>
            <input type='number' placeholder='From 1 to 10' min="1" max="10" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}/>

            <label>Hours Per Week</label>
            <input type='number' placeholder='Average Hours Per Week' value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)}/>
            
            <input type='submit' value='Save To-do' className = 'TodoBtn TodoBtn-block'/>
        </div>
    </form>
  )
}

export default AddTask
