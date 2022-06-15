import React from "react";
import Test from "../widgets/test";
import store from '../store'
const Home = () => {
  return (
    <div>
      Home
      <button onClick={() => store.user.signIn({ email: 'paul.brie@teleporthq.io', password: 'test'})}>Login</button>
      <Test />
    </div>
  );
};
export default Home;
