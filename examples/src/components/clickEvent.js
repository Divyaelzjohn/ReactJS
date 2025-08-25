/*import React from "react";

function Apps() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Apps;*/

/*import React from "react";

function Apps() {
  const greetUser = (name) => {
    alert(`ButtoHello ${name}`);
  };

  return (
    <div>
      <button onClick={()=>greetUser("Joy")}>Click Me</button>
    </div>
  );
}

export default Apps;*/

/*
function Apps() {
  const handleChange = (e) => {
    console.log("Value entered:",e.target.value); 
  };

  return (
    <div>
      <input type="text" onClick={handleChange}/>
    </div>
  );
}

export default Apps;*/

/*import React, { Component } from "react";

class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
    this.handleClick = this.handleClick.bind(this); // binding
  }

  handleClick() {
    this.setState({ message: "Button Clicked!" });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default Apps;*/


import React, { useState } from "react";

function Apps() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)} // event handling
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Apps;