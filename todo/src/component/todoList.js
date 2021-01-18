import React from 'react'
import Todo from "./Todo"

function TodoList({completedTask,taskList}){
    
    return(
        <div>
            {taskList.map(task=> <Todo key={task.id} task={task} completedTask={completedTask}/>)}
            
        </div>
    )
}
export default TodoList