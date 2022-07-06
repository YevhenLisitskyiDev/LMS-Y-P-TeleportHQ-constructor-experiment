import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import "./teleporthq/style.css";
import setUserData from "./services/users/setUserData";
import Login from "./teleporthq/pages/login";

import SignUp from "./teleporthq/pages/sign-up";
import PrivatePage from "./teleporthq/pages/private-page";
import Admin from "./teleporthq/pages/admin";
// import Home from "./pages/home";
import Home from "./teleporthq/pages/home";
import Course from './teleporthq/pages/course.js'

import store from "./store/index.ts";


const App = () => {
  const user = store.user.hook();
  const isAdmin = store.isAdmin.hook();

  useEffect(() => {
    if (store.auth.session.value) setUserData();

  }, []);

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
            {isAdmin ? (
              <>
                <Link to="/admin">ADMIN</Link>&nbsp;|&nbsp;
              </>
            ) : (
              ""
            )}
            <Link to="/private">PRIVATE PAGE</Link>&nbsp;|&nbsp;
            <span onClick={store.auth.signOut}>LOG OUT</span>
          </>
        ) : (
          <>
            {" "}
            <Link to="/login"> SIGN IN</Link>&nbsp;|&nbsp;
            <Link to="/signup">SIGN UP</Link>
          </>
        )}
      </nav>
      <Route exact component={Home} path="/" />
      <Route exact component={Course} path="/courses/:id" />
      <Route exact component={SignUp} path="/signup" />
      <Route exact component={Login} path="/login" />
      {isAdmin ? <AdminRoute exact component={Admin} path="/admin" /> : ""}
      {user ? (
        <PrivateRoute exact component={PrivatePage} path="/private" />
      ) : (
        ""
      )}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
