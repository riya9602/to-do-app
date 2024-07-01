import React, { useEffect, useState } from 'react'
import './TaskList.scss'
import { IInputField } from '../interface/toDo';

const TaskList :React.FC= () => {
  const[inputFields,setInputFields]=useState<IInputField[]>([]);

  useEffect(()=>{
    setInputFields([{value:""}])
  },[])
  const handleAddField =()=>{
    if(inputFields[inputFields.length-1]
      .value.trim()!==""){
      
      setInputFields([...inputFields,{value:""}]);
    }
  }

  const handleChange =(
    index:number,
    event:React.ChangeEvent<HTMLInputElement>
  )=>{
    const value =[...inputFields];
    value[index].value=event.target.value;
    setInputFields(value);
    localStorage.setItem("taskList",JSON.stringify(value));
    handleAddField();
  }

  return (
    <>
      <div className ="task_list_section">
        { inputFields.map((item,index)=>(

      <div className ="task_list_item" key={index}>
        <input type="checkbox" title="check"className ="task_checkbox"/>
        <input type ="text" title="input" className ="task_input" value={item.value as string}
          onChange={(event)=>{
            handleChange(index,event)
          }}
          />

        <button type="button" title="submit">
          Remove
        </button>

      </div>
      ))
      }</div>
    
    </>
  )
}

export default TaskList