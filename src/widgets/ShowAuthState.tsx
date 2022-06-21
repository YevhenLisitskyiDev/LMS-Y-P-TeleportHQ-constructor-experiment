import React from "react";
import store from "../store";

const ShowAuthState = () => {
  

  return (
    <div
      onClick={() => {
        console.log(store.auth.session.value)
        console.log(store.user.value)
      }}
    >
      Hit me 
    </div>
  );
};

export default ShowAuthState;