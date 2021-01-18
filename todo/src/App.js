import React, {useState ,useReducer} from 'react'
import './App.css';
import reducer from './component/reducers/reducer'
import{setItem, setCompleted, setClear} from './component/reducers/action'
import TodoList from './component/todoList'

export const initialState=[]

function App() {

  const[newTodo, setNewTodo] = useState('')
  const[state, dispatch] = useReducer(reducer, initialState)
 
  const setTask = (task )=>{
    dispatch(setItem(task))
  }
  const completedTask = (taskID) =>{
    dispatch(setCompleted(taskID))
  }
  const clearTask = () =>{
    dispatch(setClear())
  }
const formSubmit=(e)=>{
  e.preventDefault()
  setTask(newTodo)
  setNewTodo('')
}
const handleChange= (e)=>{
  setNewTodo(e.target.value)
}

  console.log(state)
  return (
    <div className="App">
      <h1>hello world</h1>
      <div>
          <form onSubmit={formSubmit}>
            <input type='text' value={newTodo}  onChange={handleChange} name='todo'/>
            <button >Add</button>
          </form>
          <button onClick={clearTask}>Clear Finished Task</button>
          <TodoList completedTask={completedTask} taskList={state}/>
      </div>
      
    </div>
  );
}

export default App;
