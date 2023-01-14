import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./molecules/Navigation/Navigation";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-zinc-700">
      <Navigation />
    </div>
  </React.StrictMode>
);
