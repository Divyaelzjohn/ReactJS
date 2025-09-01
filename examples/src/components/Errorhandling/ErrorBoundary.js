/*
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log Error
  componentDidCatch(error, info) {
    console.error("Caught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong 😢</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
*/

// API ChannelSplitterNode(Fetching Data) -> When fetching data from an API , error like network failure or invalid response may happen. We use try/catch with async/await or .catch() with fetch/ axios

/*import { useEffect, useState } from "react";

function ErrorBoundary() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await fetch("https://api.example.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        let data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}
export default ErrorBoundary*/


// import React from 'react'

// function Login() {
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let email = e.target.email.value;
//     if (!email.includes("@")) {
//       setError("Invalid email address");
//       return;
//     }
//     setError("");
//     alert("Login successful!");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="email" placeholder="Enter email" />
//       <button type="submit">Login</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// }
// export default ErrorBoundary