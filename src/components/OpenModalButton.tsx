import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { XButton, ColoredButton } from "./buttons.tsx";
import store from "../store";

const OpenModalButton = ({ children, modalContent, mode }) => {
 
  //  create toggle modal window function with use callback hook
  const toggleModalWindow = React.useCallback(() => {
    store.modal.content.next(modalContent);
    store.modal.isOpen.toggle();
  }, [modalContent]);

  return (
    <ColoredButton mode={mode} onClick={toggleModalWindow}>
      {children}
    </ColoredButton>
  );
};

export default OpenModalButton;
