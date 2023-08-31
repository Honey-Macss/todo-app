import React from 'react'

const EditAll = ({
     tasks, setTasks}) => {
    const completedTasks = () => {
        setTasks([...tasks].filter((task) => task.completed))
    }

    const clearAll = () => {
        setTasks([...tasks].filter((task) => !task.completed))
    }

    const inCompletedLength = () => {
       return [...tasks].filter((task) => !task.completed).length;
    }

    // const bringAll = () => {

    // }

  return (
    <div className=' font-medium flex items-center justify-between p-[1rem_1.3rem]'>
        <p>{inCompletedLength()} item(s) left</p>

        <span className=' flex items-center gap-[1rem]'>
            <p >All</p>
            <p>Active</p>
            <p onClick={completedTasks}>Completed</p>
        </span>

        <p onClick={clearAll}>Clear Completed</p>
    </div>
  )
}

export default EditAll