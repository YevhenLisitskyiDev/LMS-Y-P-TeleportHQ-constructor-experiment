import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
import AdminRoute from "./components/AdminRoute"
import "./teleporthq/style.module.css";
import Login from "./teleporthq/pages/login";

import SignUp from "./teleporthq/pages/sign-up";
import Admin from "./teleporthq/pages/admin";
// import Home from "./pages/home";
import Home from "./teleporthq/pages/home";

import store from "./store/index.ts";

const App = () => {
  const user = store.user.hook();
  const isAdmin = store.isAdmin.hook()
 

  return (
    <Router>
      <nav
        style={{
          display: "flex",
          height: 48,
          justifyContent: "center",
          background: "#ccc",
          alignItems: "center",
        }}
      >
        <Link to="/">HOME</Link>&nbsp;|&nbsp;
        {user ? (
          <>
          {isAdmin ? 
            <><Link to="/admin">ADMIN</Link>&nbsp;|&nbsp;</> : ''
          }
            <span onClick={store.auth.signOut}>LOG OUT</span>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login">LOGIN</Link>&nbsp;|&nbsp;
            <Link to="/signup">SIGN UP</Link>
          </>
        )}
      </nav>

      <Route exact component={Home} path="/" />
      <Route exact component={SignUp} path="/signup" />
      <Route exact component={Login} path="/login" />
      // <PrivateRoute exact component={Admin} path="/admin"/>
      <AdminRoute exact component={Admin} path="/admin"/>
      
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
