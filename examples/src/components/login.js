import { useState } from "react";

function Appss() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {loggedIn ? (
        <p>Welcome back, User!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Appss;
