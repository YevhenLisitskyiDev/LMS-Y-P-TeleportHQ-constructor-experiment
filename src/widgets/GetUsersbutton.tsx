import React from "react";
import store from "../store";
import getUsers from "./../services/getUsers"

const GetUsersbutton = () => {

  return (
    <>
     <button onClick={getUsers}>GET USERS</button>
    </>
  );
};

export default GetUsersbutton;
