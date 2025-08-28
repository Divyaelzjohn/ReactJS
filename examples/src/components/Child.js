import React from 'react'

function Child({name}) {
  console.log("Child rendered");
  return <h2>Hello {name}</h2>;
}
function App() {
  const [count, setCount]=React.useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <Child name="Job"/>
    </div>
  );
}

export default Child
