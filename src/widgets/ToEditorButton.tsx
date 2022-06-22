import React from "react";
import store from "../store";

const ToEditorButton = () => {
  const isAdmin = store.isAdmin.hook();

  return (
    <>
      {isAdmin ? (
        <a
          href="https://play.teleporthq.io/projects/every-gracious-worm-gqn6ak/editor/5c42ea00-acfc-4432-949a-b81cdb961c17"
          style={{
            position: "absolute",
            bottom: "50px",
            right: "50px",
            background: "blue",
            padding: "5px 15px",
            color: "#fff"
          }}
        >
          Edit page
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default ToEditorButton;
