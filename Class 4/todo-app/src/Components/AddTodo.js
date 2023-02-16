import React from 'react'
import { useState } from 'react'
const AddTodo = (props) => {
    const [todo, setTodo] = useState('')
    const handleOnChange = (e) => {
        // console.log(e.target.value)
        setTodo(e.target.value)
    }
    const handleOnClick = () => {
        let allTodos = props.todos
        let todoFunc = props.setTodos
        let todoObj = {
            id: allTodos.length + 1,
            task: todo,
            isCompleted: false,
        }
        todoFunc([todoObj, ...allTodos])
        setTodo('')
    }
  return (
    <div style={{
        backgroundColor: 'lightgreen',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }}>
        <input type="text" style={{
            width: '80%',
            height: '30px',
            borderRadius: '5px',
            backgroundColor: '#efefef',
        }}
        value={todo}
        onChange={handleOnChange}
        />
        <button style={{
            width: '10%',
            height: '30px',
            borderRadius: '5px',
            backgroundColor: '#efefef',
            fontWeight: 'bold',
        }}
        onClick={handleOnClick}
        >ADD</button>
    </div>
  )
}

export default AddTodo