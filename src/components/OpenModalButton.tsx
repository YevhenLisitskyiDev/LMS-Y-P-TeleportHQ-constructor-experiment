import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { XButton, AddSomethingButton } from "./buttons.tsx";
import store from "../store";

const OpenModalButton = ({ children, modalContent }) => {
  useEffect(() => {
    const escFunction = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        store.modal.isOpen.next(false);
      }
    };
    document.addEventListener("keydown", escFunction, false);

    return () => document.removeEventListener("keydown", escFunction, false);
  }, []);

  //  create toggle modal window function with use callback hook
  const toggleModalWindow = React.useCallback(() => {
    store.modal.content.next(modalContent);
    store.modal.isOpen.toggle();
  }, [modalContent]);

  const clickOutsideModalWindow = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
        toggleModalWindow();
      }
    },
    [toggleModalWindow]
  );

  return (
    <AddSomethingButton onClick={toggleModalWindow}>
      {children}
    </AddSomethingButton>
  );
};

export default OpenModalButton;
