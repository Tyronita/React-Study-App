import Button from './Button'
import React from 'react'

export default function Header ({onAdd, showAdd}) {
  return (
    <header className = 'header'>
        <h3>To-Do List</h3>
        <Button color={showAdd ? 'red':'green'} text = {showAdd ? 'Close': 'Add Task'} onClick={onAdd}/>
    </header>
  )
}