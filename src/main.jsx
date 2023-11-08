import React from "react";
import ReactDOM from "react-dom/client";

import { RemoteBallApp } from "./RemoteBallApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RemoteBallApp />
    </BrowserRouter>
  </React.StrictMode>
);
