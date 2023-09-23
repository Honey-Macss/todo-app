import  { useState } from 'react'

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
    <span className='  font-medium flex bg-[#ffffff] dark:bg-[#25273c] items-center justify-between p-[1rem_1.3rem] rounded-[6px]'>
        <form onSubmit={handleSubmit} className=' flex items-center justify-center gap-[1rem]'>
            <div onClick={ addTask } className=' h-[1.8rem] w-[1.8rem] grid place-items-center rounded-full border-[grey] border-[1px] dark:border-[#36384d] hover:cursor-pointer hover:border-[purple] ' ></div>
            <input className=' text-[1.2rem] w-[26rem] dark:text-[#cacce3] outline-none dark:bg-[#25273c]' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Add tasks' type="text"  />
        </form>

        {value.length > 0 &&  <img onClick={() => setValue("")} className=' hover:cursor-pointer' src={cross} alt="clear" />}
    </span>
  )
}

export default CreatingTaskInput