import React from "react";
import styled from "styled-components";
import CoursesManagementForm from "./../../../../teleporthq/components/courses-management-form";
import submitHandler from "./submitHandler";

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

// create modal window with styled component
const ModalWindow = styled.div`
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
  padding: 1rem;
  border-radius: 0.3rem;
`;

// create x closing button for modal window  with styled component
const XButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #f44336;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #00bcd4;
    color: #fff;
  }
`;

const CoursesCreator = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  //  create toggle modal window function with use callback hook
  const toggleModalWindow = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);



  const clickOutsideModalWindow = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
      }
    },
    [toggleModalWindow]
  );

  return (
    <>
      <AddCourseButton onClick={toggleModalWindow}>Add Course</AddCourseButton>
      <ModalWindow onClick={(e) => clickOutsideModalWindow(e)} isOpen={isOpen}>
        <ContentContainer>
          <XButton onClick={toggleModalWindow}>X</XButton>
           <CoursesManagementForm submitHandler={(e) => submitHandler(e)} />
        </ContentContainer>
      </ModalWindow>
    </>
  );
};

export default CoursesCreator;

    