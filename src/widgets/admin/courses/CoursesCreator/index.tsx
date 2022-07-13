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

const CoursesCreator = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  //  create toggle modal window function with use callback hook
  const toggleModalWindow = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <AddCourseButton onClick={toggleModalWindow}>Add Course</AddCourseButton>
      <ModalWindow onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <CoursesManagementForm submitHandler={(e) => submitHandler(e)} />
      </ModalWindow>
    </>
  );
};

export default CoursesCreator;
