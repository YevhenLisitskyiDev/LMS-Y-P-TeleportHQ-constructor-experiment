import React from "react";
import store from "../store";

const Test = () => {
  const test = store.test.hook();
  const increment = () => {
    store.test.next(store.test.value + 1);
  };

  return (
    <div
      onClick={() => {
        increment();
        console.log("clicked");
      }}
    >
      Test {test}
    </div>
  );
};

export default Test;
