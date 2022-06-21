import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "./../store";

interface PrivateRouteProps {
  path: string;
  component: JSX.Element;
  exact?: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const session = store.auth.session.hook();
  return session ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
