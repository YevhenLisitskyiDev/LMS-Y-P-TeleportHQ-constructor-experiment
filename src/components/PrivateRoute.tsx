import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "./../store";

// crete a new component that will render either the route or a redirect using renderProps
const PrivateRoute: FC<any> = ({ component: Component, ...rest }) => {
  const session = store.auth.session.hook();
  return (
    <Route
      {...rest}
      render={(renderProps) =>
        session ? <Component {...renderProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
