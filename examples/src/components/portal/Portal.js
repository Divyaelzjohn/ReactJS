import React, { useState } from "react";
import ReactDOM from "react-dom";

function Portal() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={() => setShow(true)}>Open Portal</button>

      {show &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h2>Hello from Portal </h2>
              <button onClick={() => setShow(false)}>Close</button>
            </div>
          </div>,
          document.getElementById("portal-root") // This will work now
        )}
    </div>
  );
}

export default Portal;
