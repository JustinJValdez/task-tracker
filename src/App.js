import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App=()=>{
  const [tasks, setTasks] = useState([
    
    {
      id: 1,
      text: 'Food Shopping',
      day: 'Feb 9 at 1pm',
      reminder:false,
    },
    {
      id: 2,
      text: 'House Shopping',
      day: 'Feb 10 at 1pm',
      reminder:false,
    },
    {
      id: 3,
      text: 'Mood Shopping',
      day: 'Feb 11 at 1pm',
      reminder:false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id ===id ? {...task, reminder:!task.reminder} : task))
  }
  
    return (
      
      <div className="container">

        <Header />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (<Tasks tasks={tasks}
          onDelete={deleteTask} onToggle={toggleReminder}/>) : ('Tasks Completed')}
      </div>
    )
    
  }


export default App
