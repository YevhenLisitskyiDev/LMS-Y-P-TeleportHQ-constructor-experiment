// import { AppStateProvider } from "./store";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./teleporthq/style.module.css";
// import * as toolkit from "@reduxjs/toolkit";
//import Home from "./teleporthq/pages/home";
//import SignUp from "./teleporthq/pages/sign-up";
//import Login from "./teleporthq/pages/login";

import Login from "./teleporthq/pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import HomeDesign from "./teleporthq/pages/home";

const App = () => {
  return (
    <Router>
      <nav style={{ display: "flex", height: 48, justifyContent: "center", background: "#ccc", alignItems: 'center' }}>
        <Link to="/">HOME</Link>&nbsp;|&nbsp;
        <Link to="/login">LOGIN</Link>&nbsp;|&nbsp;
        <Link to="/signup">SIGN UP</Link>&nbsp;|&nbsp;
        <Link to="/home-design">HOME DESIGN</Link>
      </nav>
      <Route exact component={Home} path="/" />
      <Route exact component={SignUp} path="/signup" />
      <Route exact component={Login} path="/login" />
      <Route exact component={HomeDesign} path="/home-design" />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
