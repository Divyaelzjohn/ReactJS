import React, { Component } from 'react';

class Lifecycle extends Component {
 /* Mounting->

 constructor(props) {
    super(props);
    this.state = { name: "Divya" };
    console.log(" Constructor: State initialized");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps: Sync state with props if needed");
    return null; // usually return new state or null
  }

  render() {
    console.log(" Render: JSX returned");
    return <h1>Hello {this.state.name}</h1>;
  }

  // 

  componentDidMount() {
    console.log("componentDidMount: Component mounted (API calls here)");
  }*/

  /*
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" shouldComponentUpdate: Always true for now");
    return true; // or false to block render
  }
  render() {
    console.log(" Render");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(" componentDidUpdate: DOM updated");
  }*/

  /*
  componentWillUnmount() {
    console.log("☠ componentWillUnmount: Cleanup work done");
  }
  render() {
    return <h2>I will disappear soon!</h2>;
  }*/

  /*constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }; // fallback UI
  }
  componentDidCatch(error, info) {
    console.log("Error caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h2>⚠ Something went wrong.</h2>;
    }
    return this.props.children;
  }*/

}
export default Lifecycle;


// a.constructor() -> Used to initialize state and bind methods. Usecase:You want a counter at 0.
/*constructor(props){
  super(props);
  this.state = { count: 0 };
}*/


// b.getDerivedStateFromProps(props, state) -> Sync state with props if needed. Runs before every render.
// Usecase: Parent gives a theme(light/dark), update child state
/*static getDerivedStateFromProps(props, state) {
if (props.theme !== state.theme) {
  return { theme: props.theme };
}
return null;
}*/

// c. render()->Must returnJSX(UI).Use case:Display UI

/*render() {
  return <h1>Hello, {this.state.count}</h1>;
}*/

// d. componentDidMount() ->Runs once after UI appperas. Use case: Fetch data from API

/* componentDidMount() {
  fetch("/api/products")
    .then(res => res.json())
    .then(data => this.setState({ products: data }));
}
*/

// updating
/* a. shouldComponentUpdate(nextProps, nextState) -> Decide whether to re-render or not.Use case: Optimizeperformance(don't re-render if nothing important changed).
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count; 
}
*/
/* b. render() ->caliing again after state/props change. Use case: show new UI. */

/* c. getSnapshotBeforeUpdate(prevProps, prevState) -> Capture something before DOM updates. Use case:Save scroll position in a chat window.
getSnapshotBeforeUpdate(prevProps, prevState){
componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot !== null) {
    this.chatBox.scrollTop = this.chatBox.scrollHeight;
  }
}
*/

// Unmounting -> componetWillUnmount() ->Cleanup before component disapperars. Use case:stip a timer , unsubscrible from webscocket.
/* componentWillUnmount() {
  clearInterval(this.timer); // stop timer
}
*/

// Error Handling
/*
a-static getDelieveredStateFromError(error)-> change UI when child throws error. Use case: Show fallback screen.
b-componentDidCatch(error,info)->Log error details. usecase:send error to server(sentry, Firebase)
componentDidCatch(error,info){
  console.error("Error logged:",error,info)
}
*/