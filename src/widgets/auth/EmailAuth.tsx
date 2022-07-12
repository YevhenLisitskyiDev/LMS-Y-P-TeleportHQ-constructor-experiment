import React, { SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";

// @ts-ignore
import AuthForm from "./../../teleporthq/components/auth-form.js";
import store from "../../store";

const authModes = {
  "/login": store.auth.signIn,
  "/signup": store.auth.signUp,
};

const EmailAuth = () => {
  const user = store.user.hook();
  const route = window.location.pathname;
  const authHandler = authModes[route];

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const [email, password] = e.currentTarget.querySelectorAll("input");

    authHandler({ email: email.value, password: password.value });
  };
  return user ? <Redirect to="/" /> : <AuthForm submitHandler={handleSubmit} />;
};

export default EmailAuth;
