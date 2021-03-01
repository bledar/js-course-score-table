import React from "react"

const ItemTask=(props)=>{
  return(
    <li className="ItemTask">
      <button>Done</button>
      <input type="checkbox" checked={props.task.done}/> <span>{props.task.title}</span>
    </li>
  );
}

export default ItemTask;