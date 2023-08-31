import React from 'react'
import EditAll from './EditAll'

const Tasks = ({mappedTasks, tasks, setTasks}) => {
  return (
    <div className=' bg-slate-300 rounded-[6px] mt-[3rem]'>
        {mappedTasks}
        {mappedTasks.length > 0 && <EditAll tasks={tasks} setTasks={setTasks} />}
    </div>
  )
}

export default Tasks