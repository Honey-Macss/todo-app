import React, { useState } from 'react'
import cross from "../Images/icon-cross.svg"
import check from "../Images/icon-check.svg"
import Tasks from './Tasks'

const AddingTasks = ({value, changeHandler, setValue}) => {
    const [tasks, setTasks] = useState([]);
    
    const addTask = () => {
        const wholeTasks = {
            taskName: value,
            completed: false,
        }
        setTasks([...tasks, wholeTasks])
    }

    const mappedTasks = tasks.map((task, index) => {
        return <span key={index} className={`  font-medium flex items-center justify-between p-[1rem_1.3rem] border-b-[1px] `}>
            
                    <span className=' flex items-center gap-[1rem]'>
                        <div onClick={() => {completed(index); console.log(task.completed, index , task.taskName); }} className={` ${task.completed ? "bg-[purple]" : "bg-[white]"} h-[1.5rem] w-[1.5rem] grid place-items-center rounded-full border-[grey] border-[1px] hover:cursor-pointer hover:border-[purple] `}>
                            {task.completed ? <img className=' w-[13px]' src={check} alt="check" /> : ""}
                        </div>
                        <span className={` text-[1.2rem] ${task.completed && "line-through"}`}>{task.taskName}</span>
                    </span>

                    <img onClick={() => deleteTasks(index)} className=' hover:cursor-pointer' src={cross} alt="clear" />
                </span>
    })

    const deleteTasks = (id) => {
        setTasks(tasks.filter((task, index) => index !== id))
    } 
    
    const completed =(id) => {
        const completeTodos = tasks.map((task, index) => {
            if (index === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(completeTodos);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // listens to the "enter" button on device
        addTask();
        setValue("");
    }

  return (
    <div>
        <span className='  font-medium flex bg-white items-center justify-between p-[1rem_1.3rem] rounded-[6px]'>
            <form onSubmit={handleSubmit} className=' flex items-center gap-[1rem]'>
                <div onClick={addTask} className=' h-[1.5rem] w-[1.5rem] rounded-full border-[grey] border-[1px] hover:cursor-pointer hover:border-[purple]'></div>
                <input className=' text-[1.2rem] outline-none' value={value} onChange={changeHandler} placeholder='Add tasks' type="text"  />
            </form>

            {value.length > 0 &&  <img onClick={() => setValue("")} className=' hover:cursor-pointer' src={cross} alt="clear" />}
         </span>

    <Tasks mappedTasks={mappedTasks} tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default AddingTasks