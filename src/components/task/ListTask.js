import React from 'react'
import Item from './Item'

const ListTasks = (props) => {
  
let listDisplay = props.list.map((todo,index)=> <Item task={todo} index={index}/>)

  return (
    <div>
      {listDisplay}
    </div>
  )
}

export default ListTasks
