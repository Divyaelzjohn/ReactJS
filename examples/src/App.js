
import CounterApp from './components/CounterApp';
import Greeting from './components/Greeting';
import ProductApp from './projects/ProductApp';
import React from 'react';
import User from './components/exclass';
import Counter from './components/classState';
import Timer from './components/CounterApp';
import Counter1 from './components/CounterApp';

import Apps from './components/clickEvent';
import TodoApp from './components/clickEvent';
import Appss from './components/login';
import Lifecycle from './components/Lifecycle';
import ParentComp from './components/ParentComp';
import FocusInput from './components/Ref/FocusInput';
import FRInput from './components/Ref/FRInput';
import FRParentInput from './components/Ref/FRParentInput';
import Portal from './components/portal/Portal';
// import ErrorBoundary from './components/Errorhandling/ErrorBoundary';

import WithCounter from './components/HOC/WithCounter';
import HoverCounter from './components/HOC/HoverCounter';
import ClickCounter from './components/HOC/ClickCounter';
import Dashboard from './components/component/ Dashboard';
import UserList from './components/component/UserList';
import AdminPanel from './components/component/AdminPanel';

function App() {
  return (
    <div>
      {/* <ForwardRef /> */}

      {/* <FocusInput/> */}

      {/* <ParentComp/> */}
      {/* <Lifecycle/> */}
      
      {/* <Greeting name="Divya"/>              // Props
      <Greeting name="John" />
      <Greeting name="Alice" /> */}

      {/* <CounterApp/> */}

      {/* <ProductApp/> */}

      {/* <User name="Divya"/> */}

      {/* <Counter1/> */}

      {/* <Timer /> */}

      {/* <Apps/> */}

      {/* <TodoApp/> */}

      {/* <Greeting/> */}

      {/* <Appss/> */}

      {/* <FRInput/> */}
      {/* <FRParentInput/> */}
      {/* <Portal/> */}

      {/* <ErrorBoundary></ErrorBoundary> */}
      {/* 
      <h1>HOC Example</h1>
      <WithCounter/>
      <HoverCounter/>
      <ClickCounter/> */}

      <Dashboard/>
      <UserList/>
      <AdminPanel/>

    </div>
  );
}
export default App;



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

