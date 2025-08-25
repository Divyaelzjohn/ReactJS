// import {useState} from "react";
// // useState

// function CounterApp(){
//   //count=current value, setCount=function to update it
//   const[count,setCount]=useState(0)

//   return(
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//     <h1>Counter App</h1>
//     <p>Count: {count}</p>
//     <button onClick={() => setCount(count + 1)}>Increase</button>
//     <button onClick={() => setCount(count - 1)}>Decrease</button>
//     <button onClick={() => setCount(0)}>Reset</button>
//   </div>
//   )
// }
// export default CounterApp;


 // useState
/*import {useState} from "react";

function CounterApp(){
  //count=current value, setCount=function to update it
  const[count,setCount]=useState(0)

  const increase=()=>{
    setCount(count+1)
  }
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
export default CounterApp;*/

// Use effect
/*import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); // runs only when count changes

  return (
    <div>
      <h2>Timer: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
export default Timer;*/


import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function Counter1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
export default Counter1;