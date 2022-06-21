import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "./../store";

interface AdminRouteProps {
  path: string;
  component: JSX.Element;
  exact?: boolean;
}

const AdminRoute: FC<AdminRouteProps> = (props) => {
  const user = store.user.hook();
  const isAdmin = user?.is_admin
  
  return isAdmin ? <Route {...props} /> : <Redirect to="/login" />;
};

export default AdminRoute;
