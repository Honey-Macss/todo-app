import CurrentStates from './CurrentStates';
import EditAll from './EditAll'
import  { useState } from 'react'

const Tasks = ({tasks, setTasks, check, cross}) => {

  const handleEditMode = (id) => {
    const updatedTodos = tasks.map((task, index) => {
        if (index === id) {
            return {...task, editMode: false}
        }else{
            return task;
        }
    });
    setTasks(updatedTodos)
  };
  const cancelEditMode = (id) => {
      const updatedTodos = tasks.map((task, index) => {
          if (index === id) {
              return {...task, editMode: true}
          }else{
              return task;
          }
      });
      setTasks(updatedTodos)
  };

  const reTaskName = (id, newName) => {
      const editTask = [...tasks].map((task, index) => {
          if (index === id) {
              task.taskName = newName
          }
          return task;
      }) 
      setTasks(editTask)
  }

  const [filter, setFilter] = useState("all")

  const todosFilter = (filter) => {
      if (filter === "all") {
          return tasks;
      } else if (filter === "active") {
          return tasks.filter((task) => !task.completed);
      } else if (filter === "completed") {
          return tasks.filter((task) => task.completed);
      }
  }

  const mappedTasks = todosFilter(filter).map((task, index) => {
      return <span key={index} className={`  font-medium flex items-center justify-between p-[1rem_1.3rem] border-b-[1px] dark:border-[#36384d] `}>
          
                  <span className=' flex items-center gap-[1rem]'>
                      <div onClick={() => {completed(index); console.log(task.completed, index , task.taskName); }} className={` ${task.completed ? " bg-gradient-to-br from-[#7ab1f9] to-[#9b5fe5]" : ""} h-[1.8rem] w-[1.8rem] grid place-items-center rounded-full border-[1px] dark:border-[#36384d] hover:cursor-pointer hover:border-[purple] `}>
                          {task.completed ? <img className=' w-[15px]' src={check} alt="check" /> : ""}
                      </div>

                      {task.editMode ?
                      <span onClick={() => handleEditMode(index)} className={` text-[1.2rem] dark:text-[#cacce3] ${task.completed && "line-through text-[#c5c4ca] dark:text-[#61627e] "}`}>{task.taskName}</span>
                      :
                      <form onSubmit={(e) => {e.preventDefault(); cancelEditMode(index)}}> <input className=' text-[1.2rem] w-[26rem] text-[#ffffff] dark:text-[#25273c] outline-none bg-[#61627e] dark:bg-[#cacce3] p-[0.5rem_0.3rem] rounded-[8px]' type="text" value={task.taskName} onChange={event => reTaskName(index, event.target.value)}  /> </form>
                      }                   
                  </span>

                  <img onClick={() => deleteTasks(index)} className=' hover:cursor-pointer' src={cross} alt="clear" />
              </span>
  })

  const deleteTasks = (id) => {
      setTasks(tasks.filter((task, index) => index !== id))
  } 

  const completed =(id) => {
      const completeTodos = tasks.map((task, index) => {
          if (index === id) {
              task.completed = !task.completed;
          }
          return task;
      });
      setTasks(completeTodos);
  }

  return (
    <div>
      { mappedTasks.length > 0 
      ?
      <div className=' bg-[#ffffff] dark:bg-[#25273c] rounded-[6px] mt-[3rem] shadow-[rgba(0,_0,_0,_0.2)] shadow-[0px_4px_4px]'>
        {mappedTasks}
        <EditAll tasks={tasks} setTasks={setTasks} filter={filter} setFilter={setFilter} />
        <CurrentStates filter={filter} setFilter={setFilter}/>
      </div> 
      :
      <h1 className=' dark:text-[#cacce3] text-[1.3rem] ml-[8rem] mt-[18rem]'>Add Some tasks to do ...</h1>}
    </div>
  )
}

export default Tasks