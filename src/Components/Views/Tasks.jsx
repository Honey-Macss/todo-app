import React from 'react'

const Tasks = ({mappedTasks}) => {
  return (
    <div className=' bg-slate-300 rounded-[6px] mt-[3rem]'>
        {mappedTasks}
    </div>
  )
}

export default Tasks