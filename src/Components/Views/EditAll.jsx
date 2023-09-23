
const EditAll = ({tasks, setTasks,filter, setFilter}) => {

    const clearCompleted = () => {
        setTasks([...tasks].filter((task) => !task.completed))
    }

    const inCompletedLength = () => {
       return [...tasks].filter((task) => !task.completed).length;
    }

    const repeatedStyle = ["text-[#a0a0a8] dark:text-[#61627e] hover:cursor-pointer hover:text-[#222221] dark:hover:text-[#fbfbfb]"]
    
  return (
    <div className=' font-medium flex items-center justify-between p-[1rem_1.3rem] '>
        <p className=" text-[#a0a0a8] dark:text-[#61627e]">{inCompletedLength()} item(s) left</p>

        <span className=' flex items-center gap-[1rem]'>
            <p className={` ${repeatedStyle} ${filter === "all" && " text-blue-400 dark:text-blue-600"  }`} onClick={() => setFilter("all")}>All</p>
            <p className={` ${repeatedStyle} ${filter === "active" && " text-blue-400 dark:text-blue-600"  }`} onClick={() => setFilter("active")}>Active</p>
            <p className={` ${repeatedStyle} ${filter === "completed" && " text-blue-400 dark:text-blue-600"  }`} onClick={() => setFilter("completed")}>Completed</p>
        </span>

        <p className={repeatedStyle} onClick={clearCompleted}>Clear Completed</p>
    </div>
  )
}

export default EditAll