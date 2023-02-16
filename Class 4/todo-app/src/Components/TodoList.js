import React from 'react'
import TodoItem from './TodoItem'
const TodoList = (props) => {
    console.log(props.todos)
  return (
    <div style={{
        backgroundColor: 'lightyellow',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '430px',
        overflowY: 'scroll',
    }}>
        <div style={{
            width: '150px',
        }}>
            <h3>Todo List</h3>
            <hr />
        </div>
        {
            props.todos.map((todo)=>(
                <TodoItem todo={todo}/>
            ))
        }
    </div>
  )
}

export default TodoList