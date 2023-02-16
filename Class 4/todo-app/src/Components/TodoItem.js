import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
        <div style={{
            width: '250px',
            backgroundColor: 'white',
            padding: '5px 10px',
            margin: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
        }}>
            <span>{props.todo.task}</span>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
            <button style={{
                marginRight: '10px',
            }}>Done</button>
            <button>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default TodoItem