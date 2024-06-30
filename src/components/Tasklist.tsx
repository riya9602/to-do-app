import React from 'react'

const Tasklist:React.FC = () => {
  return (
    <>
    <div className = "task_list_section">
      <div className = "task_list_item">
       <input type="checkbox" title="check" className="task_checkbox"></input>
       <input type=" text" title= "text" className=" task_input"></input>
       <button type='button' title= 'submit'> Remove  </button>


       
      </div>
    </div>
    </>
  
  )
}

  


export default Tasklist