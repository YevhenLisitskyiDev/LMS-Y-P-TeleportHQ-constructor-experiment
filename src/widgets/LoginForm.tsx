import React, { FC, SyntheticEvent } from "react";
// @ts-ignore
import Form from "./../teleporthq/components/form";
import store from "./../store";

const LoginForm: FC = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const [email, password] = e.currentTarget.querySelectorAll("input");
    console.log(email.value, password.value);

    store.user.signIn({ email: email.value, password: password.value });
  };
  return <Form submitHandler={handleSubmit} />;
};

export default LoginForm;
