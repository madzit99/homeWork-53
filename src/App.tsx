import { useState } from 'react'
import './App.css'

interface Task {
  text: string;
  key: string;
}

function App() {
  const [tasks, setTasks] = useState <Task[]> ([
    { text:'Приготовить завтрак', key:'1'},
    { text:'Приготовить обед', key:'2'},
    { text:'Приготовить ужин', key:'3'},
  ]);

  return (
    <>
      
    </>
  )
}

export default App
