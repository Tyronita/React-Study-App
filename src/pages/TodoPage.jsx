import '../styles/Todo.css';
import React, {useState, useEffect} from 'react';

// import components for page
import Header from '../components/to-dos/Header';
import Tasks from '../components/to-dos/Tasks';
import AddTask from '../components/to-dos/AddTask';

// import database
import { db } from "../firebase-config";
import { collection, addDoc, getDocs, deleteDoc, doc} from 'firebase/firestore';

// import authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

export default function TodoPage() {

  // hooks fow which task should be shown
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // searcher function to determine if task is important
  const isImportant = (task, id) =>{
    if(task.id === id && task.important === true){
      return('task_important');
    }
    else{
      return('task');
    }
  }

  // change importance of tasks
  const changeImportance = (task, id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, important: !task.important} : task))
    return(isImportant(task, id));
  }

  const changeReminder = (task, id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    return(reminderOn(task, id));
  }

  const reminderOn = (task, id) => {
    if(task.id === id && task.reminder === true){
      return('task_reminder');
    }
    else{
      return('task');
    }
  }

  // current user
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
  });

  // get to-dos from firebase
  const PATH_NAME = "to-dos/";
  const [todos, setTodos] = useState([]);
  const todosCollectionRef = collection(db, PATH_NAME)

  // add task - to database
  const addTask = async (task) => {
    const userID = user.uid
    const newTodo = {userID, ...task}
    await addDoc(todosCollectionRef, newTodo)
    setTodos([...todos, newTodo])
  }

  // delete task with id
  const deleteTask = async (id) => {
    const todoDoc = doc(db, PATH_NAME, id)
    await deleteDoc(todoDoc);
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // (hook/function) called when page rendered
  useEffect(() => {
    const getTodos = async () => {
      let data = await getDocs(todosCollectionRef);
      // unpack data
      data = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      // only select to-dos for authenticated user
      data = data.filter(todo => todo.userID != user.uid);
      setTodos(data);
    }

    getTodos();
  }, [])


  return (
    <main>

      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}

      {/* To-do list */}
      {todos.length >= 1 ?
        <Tasks tasks={todos} onDelete={deleteTask} onToggle={changeImportance}
          onImportant={isImportant} onReminder={reminderOn}
          onChangeReminder={changeReminder} /> : 'No tasks available' }
    
    </main>
  );
}

