import React from 'react'

const TodoList = ({todos, setTodos, setEditVal}) => {

  let handleEdit =({id})=>{
      const findTodo =todos.find((todo) => todo.id === id);
      setEditVal(findTodo)
      
  }
  let handleDelete =({id}) =>{
    //  setTodos((preVal) =>{
    //      return preVal.filter((elem, index) =>{
    //       return index !==i
    //      })
    //  } )
    setTodos(todos.filter((todo) => todo.id !==id))
    //  console.log(id)
  }
   
  return (
    <div className='todolist'>
        {
           todos.map((todo) =>{
            return(
                <li  className='list-item'key={todo.id}>
                  <input type="text" value={todo.title} className='list' onChange={event => event.preventDefault()}/> 
 

                  <div>
                    <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={() => {handleDelete(todo)}}>
                        <i className='fa fa-trash'></i>
                    </button>
                  </div>  
                </li>
            )
           })
        }
    </div>
  )
}

export default TodoList


// {id+1}.{item}