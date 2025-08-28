
// import CounterApp from './components/CounterApp';
// import Greeting from './components/Greeting';
// import ProductApp from './projects/ProductApp';
// import React from 'react';
// import User from './components/exclass';
// import Counter from './components/classState';
// import Timer from './components/CounterApp';
// import Counter1 from './components/CounterApp';

// import Apps from './components/clickEvent';
// import TodoApp from './components/clickEvent';
// import Appss from './components/login';
// import Lifecycle from './components/Lifecycle';
// import ParentComp from './components/ParentComp';

// function App() {
//   return (
//     <div>

//       <ParentComp/>
//       {/* <Lifecycle/> */}
      
//       {/* <Greeting name="Divya"/>              // Props
//       <Greeting name="John" />
//       <Greeting name="Alice" /> */}

//       {/* <CounterApp/> */}

//       {/* <ProductApp/> */}

//       {/* <User name="Divya"/> */}

//       {/* <Counter1/> */}

//       {/* <Timer /> */}

//       {/* <Apps/> */}

//       {/* <TodoApp/> */}

//       {/* <Greeting/> */}

//       {/* <Appss/> */}

//     </div>
//   );
// }
// export default App;



// import React, { useState } from "react";
// import Child from "./components/Child";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       {/* Passing same prop "Divya" every time */}
//       <Child name="Divya" />
//     </div>
//   );
// }

// const Child = React.memo(function Child({ name }) {
//   console.log("Child rendered");
//   return <h2>Hello {name}</h2>;
// });
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <Child name="Divya" /> {/* props (name) never change */}
//     </div>
//   );
// }

/*import React, { useRef } from "react";
// function App() {
//   const inputRef = useRef(null); // create a ref
//   function focusInput() {
//     inputRef.current.focus(); // direct DOM access
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="Type here..." />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

function App(){ 
  const videoRef = useRef(null);
  return (
    <div>
      <video ref={videoRef} width="300">
        <source src="video.mp4" type="video/mp4" />
      </video>
      <br />
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()}>Pause</button>
    </div>
  );
}

export default App;*/



import React, { Component } from "react";
class InputFocus extends Component {
  constructor(props) {
    super(props);
    // Step 1: Create ref
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    // Step 3: Use ref to focus input after component mounts
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <h2>Class Component Ref Example</h2>
        {/* Step 2: Attach ref to input */}
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default InputFocus;

