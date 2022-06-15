import React, { SyntheticEvent } from "react";
import Form from "./../teleporthq/components/form";
// import store from "./../store";

const LoginForm = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);

    const [email, password] = e.currentTarget.querySelectorAll("input");
    console.log(email.value, password.value)
  };
  return <Form submitHandler={handleSubmit} />;
};

export default LoginForm;
