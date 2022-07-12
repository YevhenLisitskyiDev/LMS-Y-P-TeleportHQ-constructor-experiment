import React, { SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";

// @ts-ignore
import Form from "../../teleporthq/components/form";
import store from "../../store";

const authModes = {
  "/login": store.auth.signIn,
  "/signup": store.auth.signUp,
};

const AuthForm = () => {
  const user = store.user.hook();
  const route = window.location.pathname;
  const authHandler = authModes[route];

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const [email, password] = e.currentTarget.querySelectorAll("input");

    authHandler({ email: email.value, password: password.value });
  };
  return user ? <Redirect to="/" /> : <Form submitHandler={handleSubmit} />;
};

export default AuthForm;
