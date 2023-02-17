import React from 'react'

const TodoItem = (props) => {
    // console.log(props, 'todo')
    const handleDone = () => {
        let todoFunc = props.setTodos
        let todoId = props.todo.id
        let allTodos = props.allTodos
        allTodos = allTodos.map((todo)=>{
            if(todoId === todo.id){
                todo.isCompleted = true
            }
            return todo
        })
        // console.log(allTodos)
        todoFunc([...allTodos])
    }
    const handleDelete = () => {
     let allTodos = props.allTodos

    let filtered = allTodos.filter((todo) => {
        return todo.id !== props.todo.id
    })    
    // console.log(filtered, 'filtered')
    // console.log(props.allTodos, 'allTodos')
    let todoFunc = props.setTodos
    todoFunc([...filtered])
}
  return (
    <div>
        <div style={{
            width: '250px',
            backgroundColor: props.todo.isCompleted == true ? "lightgreen" : "red",
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
            }}
            onClick={handleDone}
            disabled={props.todo.isCompleted}
            >{props.todo.isCompleted == true ? "Completed" : "Done"}</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default TodoItem