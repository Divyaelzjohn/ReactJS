// What is React? -> Open source library for building user interfaces . Not a framework,  Focus on UI, Rich ecosystem
// Why learn React? Created and maintained by Facebook
// Component based Architecture   ->resuable code 
// React is declarative ->Tell React what you want and React will build the actual UI ,React will handle efficiently updating and rendering of the components, DOM updates are handles gracefully in React.
// More on why React? -> Seamlessly integrar react into of your applications. Portion of your page or a complete page or even an entire application itself. React native for mobile applications. 
// Prerequisites -> HTML,CSS and JS fundamentals, ES6 , javascript -'this' keyword,filter,map and reduce. ES6 -> let& const , arrow functions, template literals, default parameters, object literals, rest and spread operator and destructuring assignment

// Fundamentals, HTTP, Routing, Redux, Utilities

/* Create-react-app -> 
npx-> npx create-react-app<project_name>
npm package runner

npm-> npm install create-react-app-g
create-react-app<project_name>  
*/

// Componets ->Root components ->comonents are reusable a component contain other components. javascript-component code->app.js-AppComponent 
/* COmponet Type
1.Stateless Functional Component 
 - JavaScript Functions->
 Ex...//  Greeting.js
    function Greeting(props) {
      return <h2>Hello, {props.name}!</h2>;
    }
    export default Greeting;

    <Greeting name="Divya"/>                         //Hello, Divya!
    <Greeting name="John"/>                         //Hello, John!

 Ex...// Button.js
        function Button() {
          return <button>Click Me</button>;
        }
      // App.js
      import Button from "./Button";

      function App() {
        return (
          <div>
            <h1>Hello React</h1>
            <Button /> { using the component }
            </div>
          );
        }
        
  export default App;
2.Stateful Class Component
 -Class extending Component class
 -Render method returning HTML
  Ex...import React, { Component } from "react";
      class Welcome extends Component {
        render() {
          return <h1>Welcome {this.props.name}</h1>;
        }
      }
      export default Welcome;

    <Welcome name="Divya"/>
*/

/* Components describe a part of the user interface
They are re-usable and can be nested inside other componets */


// Functional Componets
// Props(passing Data to Components)-> used to send data from parent to child
// state(Component's own Data) ->State is data inside a component that can change.
/* import { useState } from "react";
  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }
  export default Counter;
 */
/* Properties(props)---->Javascript Function ---->HTML(JSX)
- simple functions
- Use Functional componets as much as possible
- Absence of 'this' keyword
- Solution without using state
- Mainly responsible for the UI
- Stateless / Dumb/ Presentational
*/

/* {

Props->Communication between components
-Props let us passs data from parent -> child. , 
- Example -A ProductCard needs product name,price , image ->thses come from props. 
-Without props , all componets would be empty shells

State->Components own memmory
-State stores data that changes inside a component.
-ex.-A counter needs to remember the current count.
    -A cart needs to remember which items you added
-without state components would never update.

Hooks->lifecycle & Side effects 
-lets componets react when something happends.
-Ex..Fetching data when a page loads, setting a timer , or listening to a window resize.

Context/Redux -> Global state
-Props and state are for small apps.
-for big apps(like Amazone) we need global state(share data)

} */

// Class -> A class component is a React component written using ES6 classs syntax
/* import React,{Component} from "react";class ComponetName extends Component{render(){return(<div> <h1>Hello, I am a Class Component</h1></div>)}} Export default ComponentName;*/
/*
- More feature rich
- Maintain their own private data -state
- Complex UI logic
- Provide lifecycle hooks
- Stateful / Smart / Container
*/

/* Intoducing Hooks -> Hooks are new feature proposal that lets you use state and other React features without writing a class. The're currently in React v16.7.0-alpha and being dicussed in an open RFC */

/* Hooks ->Hooks are special function in react that you use state and other React features without writing class components. WHen we say update , we usally mean updating state or runnning side effects using hooks

// Common React Hooks for Updates

1.UseState-> update state ->Allows you to add state in a functional component. Updatting re-rendering the component
2.useEffect -> Run code on updates -> Runs after render and can be used for fetching data, updating DOM , timers, etc. 
can run on mount, state change, or unmount.
3.useReducer->Complex Updates 
Alternative to useSTate for more complex state logic

 - No breaking changes.
 - Completely opt-in & 100% backwards-compatible.
 - What ever we've learned so far in this series still holds good.
 - Componet types - Functional components and class components.
 - Using state, lifecycle methods and 'this' binding.
 - After understanding state, event binding and lifecycle hooks in class componets.
*/

// JSX
/*  Javascript XML(JSX) -> 
 - Extention to the javascript language syntax
 - Write XML-like code for elements and componets.
 - JSX tags have a tag name, attributes, and children.
 - JSX is not a necessary to write React applications.
 - JSX makes your react code simpler and elegant.
 */

/* JSX diffrences -> 
 - class-> className
 - for->htmlFor
 - camelCase property naming convention
  -> onclick->onClick
  -> tabindex->tabIndex
 */

// Props(properties)
  /* we can access any attribute we want to render dynamic content , props are immutable */

// Component state (props vs state)
/* props
- props get passed to the component
- function parameters 
- props are immutable
- props-Functional Components
  this.props- class components
*/
/* state
- state is managed within the component
- variable declared in the function body 
- state can be changed
- UseState Hook-Functional Components
  this.state- Class Componets
*/


// SetState ->setState is a method usedin class components toupdate the state of a component. When state changes, React will re-render the component with the new values
/* 
- Always make use of setState and never modify the state directly.
this.state.count=this.state.count+1;  -> this.setState({count:this.state.count+1})
- Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in a function as an arguments instead of the regular object.
*/

// Destructuring ->1.functional parameter it self, 
/*const Greet=({name,heroName})=>{
  console.log(props)
  return(
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  )
}
export default Greet*/
// 2.Destructuring function body
/*const Greet=props=>{
  const {name,heroName}=props
  return(
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  )
}
export default Greet*/

/* Event handler -just like js (onclick,onchange) React also handles events - but with some diffrence  
1.React events are written in camelCase-> onclick,on change ,etc.
2.You pass a function instead of string.
3.React uses a system called Synthetic Events( a wrapper around native events for cross-browser compatibility ).
*/

// How to bind event handler -> binding render, arrow function,class constructor, class property with arrow function . In React , event binding means connecting an event (like click, change, submit, etc) to a function(event handler) so that something happends when the used interact with the UI

// Parent component -> 16 
