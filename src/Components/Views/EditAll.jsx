
const EditAll = ({tasks, setTasks}) => {

    const clearCompleted = () => {
        setTasks([...tasks].filter((task) => !task.completed))
    }

    const inCompletedLength = () => {
       return [...tasks].filter((task) => !task.completed).length;
    }

    const checkAll = () => {
      setTasks([...tasks].map((task) => {
        task.completed = true;
        return task;
      }))
    }

    const repeatedStyle = ["text-[#a0a0a8] dark:text-[#61627e] hover:cursor-pointer hover:text-[#222221] dark:hover:text-[#fbfbfb]"]
    
  return (
    <div className=' font-medium flex items-center justify-between p-[1rem_1.3rem] '>
        <p className=" text-[#a0a0a8] dark:text-[#61627e]">{inCompletedLength()} item(s) left</p>

        <p className={repeatedStyle} onClick={checkAll}>Check All</p>

        <p className={repeatedStyle} onClick={clearCompleted}>Clear Completed</p>
    </div>
  )
}

export default EditAll