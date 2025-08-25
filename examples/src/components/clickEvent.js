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


/*import React, { useState } from "react";

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
export default Apps;*/


import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState(""); // input value
  const [tasks, setTasks] = useState([]); // list of tasks

  // Handle input change (event object e)
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    if (task.trim() !== "") {
      setTasks([...tasks, task]); // add new task
      setTask(""); // clear input
    }
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleChange} // event handling
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
