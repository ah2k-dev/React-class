// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      {console.log(todos, 'todos ->')}
      <Header />
      <AddTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
