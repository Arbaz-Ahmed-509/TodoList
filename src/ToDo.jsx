import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from "uuid";
import TodoList from './TodoList'

const ToDo = () => {
    const [inputVal, setInputVal] = useState("")
    const [items, setItems] =  useState([])
    const [editVal, setEditVal] = useState(null)
     
    const updateItem = (title, id ) => {
        const newItem = items.map((todo) => 
            todo.id === id ? {title, id } :todo
        );
        setItems(newItem)
         setEditVal("");
    
        }
    useEffect(() =>{
        if(editVal){
            setInputVal(editVal.title);
        }
        else{
            setInputVal("")
        }
    },[setInputVal, editVal])

    let getInpVal = (event)=>{
        setInputVal(event.target.value)
    }

    let addTodo = (event) =>{
        event.preventDefault();
        if(!editVal){
            setItems([...items,{id :uuidv4(), title:inputVal}])
            setInputVal("")
       
        }
        else{
            updateItem(inputVal, editVal.id,)
        }
    }

  return (
    <div>
        
        <form action="" >
            <input type="mail" value={inputVal} onChange={getInpVal} className='form' placeholder='Enter the data to Add in list' /> <br /><br />
    
            <button type="value" onClick={addTodo} className='btns'>
                {editVal ? "Add" :"Submit"}
            </button>
        </form >

       < TodoList todos={items} setTodos={setItems} setEditVal= {setEditVal} />
    </div>
  )
}

export default ToDo