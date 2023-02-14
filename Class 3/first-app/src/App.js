import './App.css';
import Component1 from './Component1';
import {useState} from 'react';
function App() {
  // const name = "John";
  // const [name, setName] = useState(1)
  // const updateName = () => {
  //   setName("Ahmed")
  // }
  let [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count+1)
  }
  return (
    <div className="App">
      {console.log(count)}
      {/* <Component1 name={name}/>
      <Component1 name="Ahmed"/> */}
      {/* <Component1 />
      <Component1 />
      <Component1 /> */}  
      {/* <button onClick={
        updateName
      }>Update State</button> */}
      <button onClick={incrementCount}>+</button>
      <h1>{count}</h1>
      {/* <Component1 count={count} /> */}
    </div>
  );
}

export default App;
