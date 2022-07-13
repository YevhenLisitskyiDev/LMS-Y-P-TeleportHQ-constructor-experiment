import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "./../../store";

interface AdminRouteProps {
  path: string;
  component: JSX.Element;
  exact: boolean;
}

const AdminRoute: FC<AdminRouteProps> = (props) => {
  const isAdmin = store.isAdmin.hook();

  return isAdmin ? <Route {...props} /> : <Redirect to="/" />;
};

export default AdminRoute;
