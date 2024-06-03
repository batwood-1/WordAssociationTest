import React from "react";
import logo from "./iconic.svg";
import "../App.css";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Word Association Test</h1>
      </header>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="App-footer">
      <p> &copy; 2021 XAG Systems </p>
    </div>
  );
};

export { Footer, Header };
