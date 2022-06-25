import React from "react";
import store from "../../store";
import getUsers from "../../services/admin/getUsers"

const GetUsersbutton = () => {

  return (
    <>
     <button onClick={getUsers}>GET USERS</button>
    </>
  );
};

export default GetUsersbutton;
