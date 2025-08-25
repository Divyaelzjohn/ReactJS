// function Greeting(props){
//   return <h2>Hello, {props.name}!</h2>
// }
// export default Greeting;

// Using event binding

function Greeting(){
  const sayHello=(name)=>{
    alert(`Hello,${name}!`);
    }
    return (
      <div>
        <button onClick={()=>sayHello("Divya")}>Say Hello</button>
      </div>
    )
  }
  export default Greeting;