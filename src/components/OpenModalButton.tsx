import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { XButton } from "./buttons.tsx";
import store from "../store";

// create add course button with styled component
const AddCourseButton = styled.button`
  background-color: #00bcd4;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: #00acc1;
  }
`;

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
    <AddCourseButton onClick={toggleModalWindow}>{children}</AddCourseButton>
  );
};

export default OpenModalButton;
