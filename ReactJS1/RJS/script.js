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
 Ex...function Welcome(props){return <h1>Hello, {props.name}</h1>}
2.Stateful CLass Component
 -Class extending Component class
 -Render method returning HTML
 Ex... class Welcome extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>;
    }
  }
*/

/* Components describe a part of the user interface
They are re-usable and can be nested inside other componets */


// Functional Componets
/* Properties(props)---->Javascript Function ---->HTML(JSX)
- simple functions
- Use Functional componets as much as possible
- Absence of 'this' keyword
- Solution without using state
- Mainly responsible for the UI
- Stateless / Dumb/ Presentational
*/

// Class
/*
- More feature rich
- Maintain their own private data -state
- Complex UI logic
- Provide lifecycle hooks
- Stateful / Smart / Container
*/

/* Intoducing Hooks -> Hooks are new feature proposal that lets you use state and other React features without writing a class. The're currently in React v16.7.0-alpha and being dicussed in an open RFC */

/* Hooks 
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


// SetState
/* 
- Always make use of setState and never modify the state directly.
- Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in a function as an arguments instead of the regular object.
*/

// Destructuring
// Event handler 
// How to bind event handler -> binding render, arrow function,class constructor, class property with arrow function

// Parent component
