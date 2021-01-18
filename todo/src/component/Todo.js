import React from 'react'

function Todo({task, completedTask}){
return(
    <div onClick={()=>completedTask(task.id)} className={task.completed? 'completed' :''}    >
        {task.item}
    </div>
)
}
export default Todo