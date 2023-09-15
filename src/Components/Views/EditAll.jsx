
const EditAll = ({tasks, setTasks, setFilter}) => {

    const clearCompleted = () => {
        setTasks([...tasks].filter((task) => !task.completed))
    }

    const inCompletedLength = () => {
       return [...tasks].filter((task) => !task.completed).length;
    }

  return (
    <div className=' font-medium flex items-center justify-between p-[1rem_1.3rem]'>
        <p>{inCompletedLength()} item(s) left</p>

        <span className=' flex items-center gap-[1rem]'>
            <p className=' hover:cursor-pointer' onClick={() => setFilter("all")}>All</p>
            <p className=' hover:cursor-pointer' onClick={() => setFilter("active")}>Active</p>
            <p className=' hover:cursor-pointer' onClick={() => setFilter("completed")}>Completed</p>
        </span>

        <p className=' hover:cursor-pointer' onClick={clearCompleted}>Clear Completed</p>
    </div>
  )
}

export default EditAll