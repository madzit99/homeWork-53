import { useState } from 'react'
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

interface TaskType {
  text: string;
  key: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]> ([
    { text:'Приготовить завтрак', key:'1'},
    { text:'Приготовить обед', key:'2'},
    { text:'Приготовить ужин', key:'3'},
  ]);

  const [value, setValue] = useState<string>('');

  const deleteTask = (key:string) => {
    const updatedTasks = tasks.filter((task) => task.key !== key);
    setTasks(updatedTasks);
  };

  const addTask = () => {   
    const lastKey = tasks.length > 0 ? parseInt(tasks[tasks.length - 1].key): 0;
    const newTask = {
      text: value,
      key: (lastKey + 1).toString(),
    };
    setTasks([...tasks, newTask]);
    setValue('');
  };

  const edit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <AddTaskForm edit={edit} addTask={addTask} value={value} />
      {tasks.map((task) => (
        <Task text={task.text} onDelete={() => deleteTask(task.key)} />
      ))}
    </div>
  )
}

export default App
