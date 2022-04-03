//import logo from './logo.svg';
import '../styles/todo.css';
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import React, {useState} from 'react'
import AddTask from '../components/AddTask';

export default function TodoPage() {
  const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState<any[]>([
     
  ])

    const addTask = (task: any) => {
    const id = Math.floor(Math.random() *10000)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

    const deleteTask = (id: any) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


    const isImportant = (task: any, id: any) =>{
    if(task.id === id && task.important === true){
      return('task_important');
    }
    else{
      return('task');
    }
  }

    const changeImportance = (task: any, id: any) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, important: !task.important} : task))
    return(isImportant(task, id));
  }

    const changeReminder = (task: any, id: any) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    return(reminderOn(task, id));
  }

    const reminderOn = (task: any, id: any) => {
    if(task.id === id && task.reminder === true){
      return('task_reminder');
    }
    else{
      return('task');
    }
  }

  return (
    
    <div className="Container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={changeImportance} onImportant={isImportant} onReminder={reminderOn} onChangeReminder={changeReminder}/> : 'No tasks available'}
    </div>
  );
}

