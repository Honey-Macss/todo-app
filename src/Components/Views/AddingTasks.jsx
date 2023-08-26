import React, { useState } from 'react'
import cross from "../Images/icon-cross.svg"
import check from "../Images/icon-check.svg"
import Tasks from './Tasks'

const AddingTasks = ({value, changeHandler, setValue}) => {
    const [tasks, setTasks] = useState([]);
    
    const addTask = () => {
        const wholeTasks = {
            id:tasks.length === 0 ? 1 : tasks[tasks.length - 1].id +1,
            taskName: value,
            completed: false,
        }
        setTasks([...tasks, wholeTasks])
    }
    // const [checkStatus, setCheckStatus] = useState(false)

    const mappedTasks = tasks.map((task, index) => {
        return <span key={index} className={`  font-medium flex items-center justify-between p-[1rem_1.3rem] border-t-[1px] ${index === 0 && 'border-t-[0px]'}`}>
            
                    <span className=' flex items-center gap-[1rem]'>
                        <div onClick={() => completed(task.id)} className={` ${task.completed ? "bg-[purple]" : "bg-[white]"} h-[1.5rem] w-[1.5rem] grid place-items-center rounded-full border-[grey] border-[1px] hover:cursor-pointer hover:border-[purple] `}>
                            {task.completed ? <img className=' w-[13px]' src={check} alt="check" /> : ""}
                        </div>
                        <span className={` text-[1.2rem] ${task.completed && "line-through"}`}>{task.taskName}</span>
                    </span>

                    <img onClick={() => deleteTasks(task.id)} className=' hover:cursor-pointer' src={cross} alt="clear" />
                </span>
    })

    const deleteTasks = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    } 

    const completed =(id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return {...tasks, completed: true}
            } else {
                return task
            }
        }))
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

         <Tasks mappedTasks={mappedTasks} />
    </div>
  )
}

export default AddingTasks