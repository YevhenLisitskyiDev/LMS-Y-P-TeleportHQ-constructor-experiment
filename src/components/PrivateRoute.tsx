import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "./../store";

interface PrivateRouteProps {
  path: string;
  component: JSX.Element;
  exact?: boolean;
}

// create functional private route react component

const PrivateRoute = ({
  path,
  component: Component,
  exact,
}: PrivateRouteProps) => {
  const session = store.auth.session.hook();

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => {
        if (session) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
