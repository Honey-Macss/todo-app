// import  { useEffect } from 'react'
import cross from "../Images/icon-cross.svg"
import check from "../Images/icon-check.svg"
import Tasks from './Tasks'
import useLocalStorage from '../hooks/useLocalStorage'
import CreatingTaskInput from './CreatingTaskInput'

const AddingTasks = () => {
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    // useEffect(() => {
    //     if (tasks.length === 0) return;
    //     localStorage.setItem("tasks", JSON.stringify(tasks))
        
    // }, [tasks]);

    // useEffect(() => {
    //     const tasks = JSON.parse(localStorage.getItem("tasks"))
    //     setTasks(tasks);
    // }, [])
    
    

  return (
    <div className=' mt-[2rem]'>
        <CreatingTaskInput tasks={tasks} setTasks={setTasks} cross={cross} />
        <Tasks tasks={tasks} setTasks={setTasks} check={check} cross={cross} />
    </div>
  )
}

export default AddingTasks