import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "./../../store";

// crete a new component that will render either the route or a redirect using renderProps
const PrivateRoute: FC<any> = (props) => {
  const session = store.auth.session.hook();
  return session ? <Route {...props} /> : <Redirect to="/login" />
};

export default PrivateRoute;
