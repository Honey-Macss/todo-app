import  { useState } from 'react'
import { FaPlus } from "react-icons/fa"

const CreatingTaskInput = ({ tasks, setTasks, cross}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // listens to the "enter" button on device
        addTask();
        setValue("");
    }

    const addTask = () => {
        if (value.trim().length === 0 ) {
            return;
        }
        const wholeTasks = {
            taskName: value,
            completed: false,
            editMode: true,
        }
        setTasks([...tasks, wholeTasks])
    }

  return (
    <span className='  font-medium flex bg-[#ffffff] dark:bg-[#25273c] items-center justify-between p-[1rem_1.3rem] md:p-[0.8rem_1rem] sm:p-[0.5rem_0.7rem] rounded-[6px]'>
        <form onSubmit={handleSubmit} className=' flex items-center justify-center gap-[1rem] md:gap-[0.7rem]'>
            <div onClick={ addTask } className=' h-[1.8rem] w-[1.8rem] sm1:h-[1.5rem] sm1:w-[1.5rem] grid place-items-center rounded-full bg-gradient-to-br from-[#7ab1f9] to-[#9b5fe5]  border-[1px] dark:border-[#36384d] hover:cursor-pointer hover:border-[purple] text-white ' ><FaPlus/></div>
            <input className=' text-[1.2rem] md:text-[1rem] sm:text-[0.8rem] w-[26rem] lg:w-[20rem] md:w-[15rem] md3:w-[14rem] sm1:w-[100%] dark:text-[#cacce3] outline-none dark:bg-[#25273c]' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Create a new task to do ...' type="text"  />
        </form>

        {value.length > 0 &&  <img onClick={() => setValue("")} className=' hover:cursor-pointer' src={cross} alt="clear" />}
    </span>
  )
}

export default CreatingTaskInput