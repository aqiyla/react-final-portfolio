import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
