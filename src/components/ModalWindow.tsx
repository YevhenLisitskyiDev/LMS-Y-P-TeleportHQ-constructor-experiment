import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { XButton } from "./buttons.tsx";
import store from "../store";

// create modal window with styled component
const ModalWindowWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

// create content container with styled component
const ContentContainer = styled.div`
  background-color: #fff;
  padding: 4rem 2rem;
  border-radius: 0.3rem;

  position: relative;
`;

const ModalWindow = () => {
  const isOpen = store.modal.isOpen.hook();
  const modalContent = store.modal.content.hook();
  
  console.log(modalContent)

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
    store.modal.isOpen.toggle();
  }, [isOpen]);

  const clickOutsideModalWindow = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
        toggleModalWindow();
      }
    },
    [toggleModalWindow]
  );

  return (
    <>
      <ModalWindowWrapper
        onClick={(e) => clickOutsideModalWindow(e)}
        isOpen={isOpen}>
        <ContentContainer>
          <XButton onClick={toggleModalWindow}>X</XButton>
         {modalContent}
        </ContentContainer>
      </ModalWindowWrapper>
    </>
  );
};

export default ModalWindow;
