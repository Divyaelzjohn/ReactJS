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



// conditional rendering ->Showing diffrent UI based on some condition(like if/else in javascript , but for JSX)

/* Ways to do conditional rendering */
/* 1.if/else
   2.Element variable
   3.Ternary conditional operator
   4.SHort circuit operator */
// 1. Using if/else

/*function Greeting({isLoggedIn}){
  if(isLoggedIn){
    return <h2>Welcome back!</h2>
  }else{
    return <h2>Please log in.</h2>
  }
}*/

// 2.Using Tenrnary Operator(?:) - best for inline condition
/*function Greeting({ isLoggedIn }) {
  return (
    <h2>{isLoggedIn ? "Welcome back!" : "Please log in."}</h2>
  );
}*/

// 3.Uisng Logical AND(&&)->If you want to render something when the condition is true
/*function Notification({ hasMessages }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {hasMessages && <p>You have new messages!</p>}
    </div>
  );
}*/

// 4.Using Switch Statement->Good when you have multiple cases.
/*function Status({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "success":
      return <p>Data loaded</p>;
    case "error":
      return <p>Error loading data</p>;
    default:
      return <p>Unknown status</p>;
  }
}*/

// Example
/*import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {loggedIn ? (
        <p>Welcome back, User! </p>
      ) : (
        <p>Please log in to continue.</p>
      )}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
export default App;*/





// List Rendering? -> List rendering means displaying multiple elements from an array dynamically  in JSX using .map(). Instead of writing many <li> manuually , we loop through data and render automatically.

/*function FruitsList() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
*/

// Rendering Objects
/*function Products() {
  const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "Watch", price: 1500 },
    { id: 3, name: "Bag", price: 1000 }
  ];
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}*/

// With COmponents
/*function ProductCard({ product }) {
  return (
    <div style={{border: "1px solid gray", margin: "5px", padding: "10px"}}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}
function ProductApp() {
  const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "Watch", price: 1500 },
    { id: 3, name: "Bag", price: 1000 }
  ];
  return (
    <div>
      <h2>Product List</h2>
      {products.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
*/
// creates a new array with the result of calling a provided function on every element in the calling array


// Listes and Keys -> In react , lists are usually rendered using javascript map() function. It allows you to create UI elements from an array

/*function FruitsList() {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
*/

// Keys in React -> A key is a special string attribute you must include when creating lists. Key help React Identify which items changed, added, or removed. Without keys, React will re-render inefficiently.

/*function Products() {
  const products = [
    { id: 1, name: "Shoes", price: 2000 },
    { id: 2, name: "Watch", price: 1500 },
    { id: 3, name: "Bag", price: 1000 }
  ];
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
        </div>
      ))}
    </div>
  );
}*/

/* A key is a special string attribute you need to include when creating lists of elements . Keys give the elements a stable identity.
Keys help react identity which items have changed , are added , or are removed.Help in efficient update of the user interface.
Keys in react - keys help React identify which items have changed , are added , or removed
                They make list rendering efficient by reducing unnecessary re-renders. 
                Key shuld be unique and stable
*/



// Index as key
/* 
1.The items in yourlist do not have a unique id
2.The list is a static list and will not change
3.The list will never be recorded or filtered
*/




// Styling React Components
/* 
1.CSS stylesheets ->creat a CSS file, wrire inside it. import it into your React  component.
2.inline styling->Here, you use a style attribute directly in JSX, But instead og normal CSS, you use Javascript objects. Property names are written in camelCase(eg.backgroundColor instead of background-color).Values are usually strings.
3.Css Modules  -> CSSModules help you write CSS that is scoped only to one component(no global conflicts).
  1.create a file with the name format:ComponentName.module.css, 2 import it as an object.Use styles with className={styles.className}
  import styles from "./Button.module.css";function Button(){return <button className={styles.btn}>Click Me,/button>} export default Button;
4.CSS in JS Libaries
*/



// basics of from handling- form elements , Controlled component 
/*
this.state={email:''}
this.changeEmailHandller=(event)=>{this.setState({email:event.target.value})}
 <input type='text> value={this.state.email}  onChange={this.changeEmailHandler} />
 */
/*
1.Form elements in react ->
-<input/> -> text, password, number
-<textarea /> ->multi-line text
-<select /> ->dropdown
<button /> ->submit

2.Controlles componet-> A controlled components is a form element whose value is controlled by React state.
-whatever is in state ->shows up in the box
-Whatever user types -> updates the state using onChange.

state is the real data, input box is just the mirror, when you type ->  the reflection changes -> but React updates the real data first(state), then shows it in the mirror(input).
*/


//  LifeCycle method
/* life cycle methods in class components 
1.Mounting ->When an instance of a componet is being created and inserted into the DOM
-constructor, 
-static getDerivedStateFrmProps, 
-render and 
-componentDidMount
2.Updating ->When an instance of a component is being re-rendered as a result of changes to either its props or state
-static getDerivedStateFromProps,
-shouldComponentUpdate,
-render,
-getSnapshootBeforeUpdate and
-componentDisUpdate
3.Unmounting ->When a component is being removed from the DOM
-componentWillUnmount
4.Error handling ->When there is an error during rendering, in a lifecylcle , in a lifecycle method, or in the constructor of any child component  
-static getDerivedStateFromError and 
-componentDisCatch
*/


// Mounting (Birth stage)->Happens when the component is created & inserted into the DOM
/*
1.constructor() -> Initialize state, bind methods.
2.static getDerivedStateFrmProps() -> Update state from props before rendering.
3.render ->Returns JSX(UI).
4.componentDidMount()->Runs after first render(good for API calls)
*/

// Updating ->Happens when props or state changes -> component re-renders.
/*
1.static getDerivedStateFromProps
2.shouldComponentUpdate,
3.render,
4.getSnapshootBeforeUpdate and
5.componentDisUpdate
*/

// 3.Unmounting ->Happens when  component romove from DOM.
/*
-componentWillUnmount ->Clanup(remove timer ,cancels API calls ,unsubsscribe listener).
*/


// 4.Error Handling -> when there's an error during rendering, lifrcycle , or constructor of child component
/*
1.static getDerivedStateFromError ->Updates state to show fallback UI.
2.componentDisCatch -> Log error details
*/


// Fragments -> In react , every componet's render() or return statements must retuen a single parent element. But sometimes, you don't want an extra <div> wrapper in your HTML. Fragments let you group elements without adding extra DOM nodes.
// why we use fragments? -> Avoid unecessary <div> s, useful when rendering lists in tables , grid , etc

// Pure components -> A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison.
// what is a pure components? A pure component in react is just like a class component but  with one important feature: It prevents unnecessary re-renders by doing a shallow comparison of props and state. If props or state don't change , the component won't re-render.[Pure components  doesn't check the array- only the reference. So if if you mutate arrays/objects directly, React thinks "It's the same" -> no re-render. That's why we never mutatae state, always create a new copy.]

// Regular Component ->Always redraws the whole notebook, even if the text did't change.
// Pure Component->only redraws when the text actually changed 

/* Imagin you're a teacher checking homework:
Normal Componet->You re-check all note books every day even if nothing changed.
Pure Component -> You only check a notebook if the student actually updated something


Where do we use pure components?
1.Performance optimization -> Prevents wasting time re-rendering UI innecessarily
                  -> In large apps with many compnents , it avoids re-rendering unchanged parts
                  -> Example:In an e-commerce site the product card won't re-render if its price & name did't change.
2.Reusable UI - When props rrely change(e.g.,profile info, product details).
                  -> When you have componets that rarely change.
                  Example: User Profile Info(name,email,photo)
3.Large apps - Helps improve speed in complex UIs eith many components.
                Optimizes rendering when scrolling through big data (e.g., chat messages, product catalogs)
*/

// Regular Component ->A regular component does not implement the shouldComponentUpdate method. It always returns true by default.


// Shallow comparison(SC)-> shallow comparison means React only checks if two values are values are the same at the top level. [React checks only the first /top level val;ues , not the deep nested ones.]
/* Shallow comparison means React only checks if two valuesa are the same at the top level
// Primitive values(string, number, boolean)
"Divya"==="Divya"
10===10

// Objects(reference comparison)
{name:"Divya"}==={name:"Divya"}
if both objects look the same , React says they are diffrent, because they are stored in diffrent memmory locations.

class PureComp extends React.PureComponent {
  render() {
    console.log("PureComp rendered");
    return <h2>{this.props.user.name}</h2>;
  }
}
class Parent extends React.Component {
  state = { user: { name: "Divya" } };
  componentDidMount() {
    setInterval(() => {
      this.setState({ user: { name: "Divya" } }); 
      // looks same, but new object every time 
    }, 2000);
  }
  render() {
    return <PureComp user={this.state.user} />;
  }
}


3.Works Only in class Components
-React.PureComponent is available only in class-based componets. For function components, we use React.memo().

4.Functional Components with React.memo() -> React.memo() is the function world's PureComponent.
import React from "react";

const User = React.memo(function User({ name }) {
  console.log("User Component rendered");
  return <h2>{name}</h2>;
});

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <User name="Divya" />
    </div>
  );
}
*/
/* Analogy for Objects/Arrays
Think of shallow comparison like checking two gift boxes by just looking at the box, not opening it:
-if the box is the same box(same reference), you say same.
-if you create a new box(even with the same gify inside),React says x different. 
*/

/* 
Primitive Types-> a (SC) b returns true if a and b have the same value and are of the same type
Ex: string 'Vishwas' (SC) string 'Vishwas' returns true

Complex Types-> a (SC) b returns true if a and b reference the exact same object.
var a=[1,2,3];
var b=[1,2,3];
var c=a;
var ab_eq=(a===b);     // false
var ac_eq=(a===c);     // true
*/

/* Pure Component -> A pure component implements shouldComponentUpdate with a shallow prop and state comparison
SC of prevState with currentState-----|
SC of prevProps with currentProps----- Re-render component
*/

/*
-we can create a component by extending the PureComponent class.
- A pureComponent implements the shouldComponentsUpdate lifecycle method by performing a shallow comarison on the propes and state of the component.
- If there is no difference , the component is not re-rendered - performance boost.
-It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour.
- Never mutate the state. Always return a new object that reflects the new state.
*/

// React memo()? -> React.memo() is the functional component version of PureComponent. It prevents a component from re-rendering if props did't change.
/* Analogy -> Think of memoization(remember results) -> 
-You ask your friend the same question every day:"What is 2+2"
-Normal friend (Normal Component) -> always answer again and again.
-Smart friend(React.memo)-> remembers last answer:"I already told you it's 4!"
*/


// What are Refs? Ref=reference. In React,refs giv you a way to directly access and interact with DOM elements or React elements created in the method

/*
Why do we need Refs? Normally in React, you don't directly touch the DOM (you let React handle it).But in some cases, you need direct access:
1.Focusing input fields(like autofocus).
2.Playing / pausing a video or audio.
3.Reading values from uncontrolled components.
4.Integrating with third-party libraries(like chart.js,d3.js).

How to Create and use a Ref
In functional components -> use useRef()
In class components -> use React.createRef().

-Key points
ref.current gives the DOM node( or React element).
Dont overuse refs - use state for most things.
Use refs for imperative action(focus , scroll, play , measure size)


Analogy:
Imagin React components as school classrooms. Normally, you communicates through the teacher(React state/props).But sometimes you directly want to tap a student's shoulder(DOM element).Tha's what a ref does
*/

/* 
What is a Ref -> Ref(Reference) , In React, we normally don't touch the real DOM direactly.  Example: we don't usually do document.getELementById("myInput")

But Sometimes, we need direct access to an elements or a child components(example:focus an input scroll a div, play a video)
For that, React gives us Refs. Think of it like a remote control: 
-React creates the TV(DOM element).-Ref is the remote to control to control that TV directly.

->What is ref in React? -ref stands for references. It gives us a way to directly access and interact with DOM elements or React components. Normally in React , we don't touch the DOM directly (we use state and props). But sometimes we need to and that's where ref help

When do we use ref? 
1.Focus an input field(like auto-focus when a form loads).
2.play/ pause a video or audio.
3.Scroll to a video or audio.
4.Scroll to a section in the page
5.Access a child component's methods or values.

How it Work
1.]Create a ref-> using React.createRef() (class) or useRef()(function).
    Create a ref in constructor.
    Attach ref to the element
    Access element using .current.
2.Attach it to a React element using ref={...}.
3.Use it-> The actual DOM node(or components instance) will be available at .current.


2.] callback Ref
1.Create a property -> initially null
2.Write a callback function -> saves DOM element in that property.
3.Attach that callback to ref attribute.
4.Access it anywhere.
*/

// What is  forward in React? -> Normally , ref can only be attached to DOM elements(like <input> or <div>). But what if we want a parent component to control a child component's DOM element?. That's where forwardRef comes in . It lets you pass a ref from parent -> child , so parent can access a childs DOM node


// Ref class component



// Forwarding Refs
/* 
Create a ref in parent component
Attach the ref to child component using ref attribute
Why do we need it? 
-if the parent wants to focus an input inside the child.
-if the parent wants to measure the size/position of a cild  DOM node.
-If the parent wants to trigger a click on a child button.
-For reusable UI components (like custom Input , button , Model etx.) Where we still want direct access to the underlying DOM element.
*/


/* Portals -> By default, when you render a React component , it gets inserted into the DOM tree under its parent component.
But sometimes you want a component to be rendered outside it's parent's DOM hierarchy -> while still keping its React state & Events

Whyuse Portals? 
1.Modals/Dialogs -> Shows popup outside root to avoid css overflow/clip issues. 
2.Tooltips/ Dropdowns-> Render ablove all elements , not hidden by parent overflow:hidden.
3.Overlays -> For loading spinners or notifications 
   
Why use Portals? 
1.Modals/Dialogs -> Show popup outside root to avoid CSS overflow/clip issues.
2.Tooltips/Dropdowns -> Render above all elements ,  not hidden by parent overflow:hidden.
3.Overlays-> for loading spinners or notifications
*/

// Error Handling Phase Methods -> React are two special lifecycle methods used only for error handling:
/*1.static getDerivedStateFromError(error)
-Runs when a child component throws an error.
-Used to update state so you can show a fallback UI.
-Does not receive this(because it's static).
-Returns an object to update state, or null.
-Example -> 
static getDerivedStateFromError(error){
retrurn {hasError:true}};

2.componentDidCatch(error, info)
Runs after an error is thrown.
-Used for logging the error(to console,server, etc).
-info gives details about the component stack trace.

example-> 
componentDidCatch(error,info){
  console.log("Error:",error);
  console.log("Error Info:",info)
}
*/
/*
static getDerivedStateFromError(error)
componentDisCatch(error, info)
*/
/* Error Boundary : A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.

The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.
*/


/*
Error boundaries are React components that catch JavaScript error in their child components tree, log those errors, and display a fall-back UI.
A class component becomes an error Boundary by defining either or both of getDerivedStateFroError and componentDidCatch lifecycle methods.
The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.
Provide a way to gracefully handle error in application code.
*/


// Higher order Components 
// reuse code -> ClickCounter<-Parent-> lift counter logic to parent and pass props-> HoverCounter
/* Parent
1.clickCounter
2.RandomComponentA
 -RandomComponent
 -HoverCounter */

//  Why Higher Oreder Components - HOC
/* 
A pattern where a function takes a component as an argument and returns a new component.
const NewComponent =higherOrderComponent(originalComponent)
const EnhancedComponent=higherOrderComponent(orginalComponent)

const IronMan=withSuit(TonyStark)
*/

//  Render  props  ,
  // common functionality between rendering 
/* 
//  what  is render Prop-> The term "render pop" refers to a techinique for sharing code between React components using a prop whose value is a function.
*/

// Context  -App Component 
/* context provides a way to pass data through the component tree without having to pass props down manually at every level. 
3 steps for making context
1.Create the context
2.Provide a context value
3.Consume the context value

ThemeContext , UserContext
default value and context type
*/ 


// React and HTTP -> web application --[Http Library]--sent-> Server --Fetch---[HTTP Library]--props&state-->webapplication
// simplest way to post data to server get,post 