import React from "react";
import withRole from "../hoc/withRole";

function AdminPanel() {
  return <h2>Admin Only Content</h2>;
}

export default withRole(AdminPanel, "admin");
