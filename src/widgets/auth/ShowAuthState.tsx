import React from "react";
import store from "../../store";
import setUserData from "../../services/users/setUserData";

const ShowAuthState = () => {
  return (
    <div
      onClick={() => {
        setUserData("login");
      }}
    >
      Hit me
    </div>
  );
};

export default ShowAuthState;
