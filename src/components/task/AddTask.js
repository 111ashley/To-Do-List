import React, {useState} from 'react'
import ListTasks from './ListTask'


const AddTask = ()=>{
  const [input, setInput] = useState("yo")
  const [list, setList] = useState([])

  const handleChange = (e)=>{setInput(e.target.value)}
  
  return(
    <div>
      <h1>Add Task</h1>
      <input onChange={handleChange}/>
      <button onClick={()=>{setList([...list, input])}}>Add Task</button>
      
      <ListTasks list={list}/>
    </div>
  )
}

export default AddTask