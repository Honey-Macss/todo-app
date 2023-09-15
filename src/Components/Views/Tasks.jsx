import React from 'react'
import EditAll from './EditAll'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const Tasks = ({mappedTasks, tasks, setTasks, setFilter}) => {
  return (
    <div className=' bg-slate-300 rounded-[6px] mt-[3rem]'>
        {mappedTasks}
        {mappedTasks.length > 0 && <EditAll tasks={tasks} setTasks={setTasks} setFilter={setFilter} />}
    </div>
  )
}

export default Tasks