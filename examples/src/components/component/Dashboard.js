import React from "react";
import withAuth from "../HOC/WithAuth";

function Dashboard(){
  return <h1>Welcome to Dashboard</h1>
}
export default withAuth(Dashboard)