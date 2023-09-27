
const CurrentStates = ({filter, setFilter}) => {
    const repeatedStyle = ["text-[#a0a0a8] md:text-[0.8rem] dark:text-[#61627e] hover:cursor-pointer hover:text-[#222221] dark:hover:text-[#fbfbfb]"]
  return (
    <span className=' flex items-center justify-center gap-[1rem] p-[1rem_1.3rem] md:p-[0.8rem_1rem] font-medium border-t-[1px] dark:border-[#36384d]'>
        <p className={` ${repeatedStyle} ${filter === "all" && " text-blue-400 dark:text-blue-600"  }`} onClick={() => setFilter("all")}>All</p>
        <p className={` ${repeatedStyle} ${filter === "active" && " text-blue-400 dark:text-blue-600"  }`} onClick={() => setFilter("active")}>Active</p>
        <p className={` ${repeatedStyle} ${filter === "completed" && " text-blue-400 dark:text-blue-600"  }`} onClick={() => setFilter("completed")}>Completed</p>
    </span>
  )
}

export default CurrentStates